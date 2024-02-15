/**
 * Represents the main class for interacting with a Telegram bot.
 */
var Telesun = class Telesun {
    /**
    * Creates an instance of the Telesun class.
    * @param {string} botToken - The token provided by BotFather for Telegram Bot API.
    */
    constructor(botToken) {

        //validate telegram bot token
        this.botToken = Utils.validateToken(botToken)

        this.apiUrl = CONFIG.BASE_TELEGRAM_API_URL + botToken

        this.defaultManagers = {
            // updateManager: null,
            callbackQueryManager: new CallbackQueryManager(botToken),
            inlineQueryManager: new InlineQueryManager(botToken),
            botInfoManager: new BotInfoManager(botToken),
            stickerManager: new StickerManager(botToken),
            forumManager: new ForumManager(botToken),
            fileManager: new FileManager(botToken),
            gameManager: new GameManager(botToken),
            payementManager: new PayementManager(botToken),
            chatManager: new ChatManager(botToken),
            messageManager: new MessageManager(botToken),

            emailManager: new EmailManager()
        };

        this.EXPECTED_METHODS = {
            cacheService: ['getScriptCache', 'getUserCache', 'getDocumentCache'],
            propertyService: ['getScriptProperties', 'getUserProperties', 'getDocumentProperties']
        };

        this.handlers = [];
        this.configs = {};

        // Initialize memoryInstances
        this.memoryInstances = {
            temporaryMemory: null,
            permanentMemory: null
        };


        return this;
    }


    /**
     * Connects to a Google Spreadsheet using its ID, enabling method chaining by returning the instance of Telesun.
     * @param {string} spreadSheetId - The ID of the Google Spreadsheet to connect to.
     * @returns {Telesun} Returns the instance of Telesun for method chaining.
     */
    connectToSpreadSheet(spreadSheetId) {
        const spreadsheetInstance = Utils.validateSpreadSheetId(spreadSheetId)
        this.sheetManager = new SheetManager(spreadsheetInstance);

        this.configs.sheetManager = this.sheetManager; // Store the instance in configs

        return this; // Enable chaining
    }



    /**
    * Configures temporary memory for the bot, including cache and session.
    * @param {Object} instance - The temporary memory instance to be used.
    * @returns {Telesun} Returns the instance of Telesun for method chaining.
    */
    temporaryMemory(instance) {
        // validate if even `instance` exists
        Utils.validateTemporaryMemoryInstance(instance)

        // Use Utils class to check if the instance is valid
        Utils.ensureValidService(instance, this.EXPECTED_METHODS.cacheService, 'CacheService');

        if (!this.memoryInstances.temporaryMemory) {
            this.memoryInstances.temporaryMemory = instance
        }

        this.configs.TCache = new TemporaryCacheManager(this.memoryInstances.temporaryMemory);
        this.configs.TSession = new TemporarySessionManager(this.memoryInstances.temporaryMemory);

        return this; // Enable chaining
    }



    /**
    * Configures permanent memory for the bot, including cache and session.
    * @param {Object} instance - The permanent memory instance to be used.
    * @returns {Telesun} Returns the instance of Telesun for method chaining.
    */
    permanentMemory(instance) {
        if (!instance) { throw new Error(ERRORS.PROPERTY_SERVICE_INSTANCE_NULL) }

        // Use Utils class to check if the instance is valid
        Utils.ensureValidService(instance, this.EXPECTED_METHODS.propertyService, 'PropertyService');

        if (!this.memoryInstances.permanentMemory) {
            this.memoryInstances.permanentMemory = instance;
        }
        this.configs.PCache = new PermanentCacheManager(this.memoryInstances.permanentMemory);
        this.configs.PSession = new PermanentSessionManager(this.memoryInstances.permanentMemory);
        return this; // Enable chaining
    }


    /**
     * Handles incoming updates from Telegram.
     * @param {Object} update - The update object received from Telegram.
     * @returns {Telesun} Returns the instance of Telesun for method chaining.
     */
    handleUpdate(update) {

        let index = 0; // To keep track of the current handler
        const self = this; // Capture 'this' outside the Proxy

        //set update to Updatemanager
        //initiate static method inside the clas
        UpdateManager.setUpdate(update)
        this.defaultManagers.updateManager = UpdateManager;


        // Setup a Proxy to intercept and dynamically bind method calls
        const ctx = new Proxy({}, {
            get(target, prop, receiver) {

                // Handle the 'sheet' property specially
                if (prop === 'sheet') {
                    return Utils.handleSheetOperations(self.configs.sheetManager);
                }

                // Special handling for '_debug'
                if (prop === '_debug') {
                    return () => Utils.listAvailableMethods();
                }

                // Attempt to directly access operations from managers and configs
                const operation = Utils.findOperationInManagersAndConfigs(self, prop);
                if (operation) return operation;

                // Fallback if the method or property is not found
                return undefined;

            }
        });


        const next = () => {
            while (index < this.handlers.length) {
                const handlerInfo = this.handlers[index++];
                const { type, middleware, data } = handlerInfo;

                if (type === 'use') {

                    // Global middleware, always execute
                    return middleware(ctx, next);


                } else if (type === 'on' &&
                    this.defaultManagers
                        .updateManager
                        .updateType() === data) {

                    // 'on' handler, execute if the update type matches
                    return middleware(ctx, next);

                } else if (type === 'stage'
                    && ctx.getStage() === data) {

                    // Handler type conditions are met, execute middleware
                    return middleware(ctx, next);

                }
                else if (Utils.handlerConditions[type]
                    && Utils.handlerConditions[type](update, data)) {

                    // Handler type conditions are met, execute middleware
                    return middleware(ctx, next);
                }
            }
        };

        next(); // Start the middleware chain

    }




    /**
     * Registers a middleware function to be used by the bot.
     * @param {Function} middleware - The middleware function.
     * @returns {Telesun} Returns the instance of Telesun for chaining.
     */
    use(middleware) {
        Utils.registerHandler(this.handlers, 'use', undefined, middleware);
        return this
    }

    /**
    * Registers a middleware for a specific update type.
    * @param {string} updateType - The type of update to listen for.
    * @param {Function} middleware - The middleware function to handle the update.
    * @returns {Telesun} Returns the instance of Telesun for chaining.
    */
    on(updateType, middleware) {
        Utils.registerHandler(this.handlers, 'on', updateType, middleware);
        return this
    }

    action(action, middleware) {
        Utils.registerHandler(this.handlers, 'action', action, middleware);
        return this
    }

    stage(stage, middleware) {
        Utils.registerHandler(this.handlers, 'stage', stage, middleware);
        return this
    }

    start(middleware) {
        Utils.registerHandler(this.handlers, 'start', undefined, middleware);
        return this
    }

    help(middleware) {
        Utils.registerHandler(this.handlers, 'help', undefined, middleware);
        return this
    }

    hears(text, middleware) {
        Utils.registerHandler(this.handlers, 'hears', text, middleware);
        return this
    }

    contact(middleware) {
        Utils.registerHandler(this.handlers, 'contact', undefined, middleware);
        return this
    }

    photo(middleware) {
        Utils.registerHandler(this.handlers, 'photo', undefined, middleware);
        return this
    }

    video(middleware) {
        Utils.registerHandler(this.handlers, 'video', undefined, middleware);
        return this
    }

    voice(middleware) {
        Utils.registerHandler(this.handlers, 'voice', undefined, middleware);
        return this
    }

    document(middleware) {
        Utils.registerHandler(this.handlers, 'document', undefined, middleware);
        return this
    }

    audio(middleware) {
        Utils.registerHandler(this.handlers, 'audio', undefined, middleware);
        return this
    }

    text(middleware) {
        Utils.registerHandler(this.handlers, 'text', undefined, middleware);
        return this
    }

    sticker(middleware) {
        Utils.registerHandler(this.handlers, 'sticker', undefined, middleware);
        return this
    }

    commands(middleware) {
        Utils.registerHandler(this.handlers, 'commands', undefined, middleware);
        return this
    }

    command(command, middleware) {
        Utils.registerHandler(this.handlers, 'command', command, middleware);
        return this
    }


    /**
     * Initiates webhook handling.
     * @param {Object} e - The event object received from the webhook.
     * @param {string} [source='webhook'] - The source of the event.
     */
    handleWebhook(e, source = 'webhook') {
        if (e && e.postData && e.postData.contents) {
            const update = typeof e.postData.contents === 'string'
                ? JSON.parse(e.postData.contents)
                : e.postData.contents;


            // this.appConfig.setUpdate(update);
            this.handleUpdate(update);


            return ContentService
                .createTextOutput(JSON.stringify({ 'status': 'success' }))
                .setMimeType(ContentService.MimeType.JSON);

        } else {
            throw new Error(source === 'webhook'
                ? "Invalid request received. Ensure that the webhook is set correctly."
                : "Error during long polling. Check your polling setup.");
        }

    }

    /**
    * Initiates long polling to check for updates.
    * @param {Object} [options={}] - The options for long polling.
    */
    longPolling(options = {}) {
        const { sleep = 1000, timeout = 60 } = options; // Accept timeout
        const startTime = new Date().getTime();
        const maxDuration = 360000;
        const safetyMargin = 10000;

        while (new Date().getTime() - startTime < maxDuration - safetyMargin) {
            try {
                // Now passing timeout to the polling method
                this.polling({ limit: 100, timeout: timeout });
                if (sleep > 0) {
                    Utilities.sleep(sleep); // Sleep based on configured duration
                }
            } catch (error) {
                console.error("Error during long polling:", error);
            }
        }

        console.log("Long polling completed.");
    }


    /**
     * Initiates a simple polling mechanism for updates.
     * @param {Object} [options={}] - The options for polling.
     */
    polling(options = {}) {
        const { limit = 100, timeout = 60 } = options;

        // Retrieve the last known offset
        var lastOffset = PropertiesService.getUserProperties().getProperty("lastOffset")
        lastOffset = lastOffset ? parseInt(lastOffset, 10) : 0; // Default to 0 if not set


        const updates = Utils.apiRequest(
            this.botToken,
            "getUpdates",
            {
                allowed_updates: CONFIG.ALLOWED_UPDATES,
                offset: lastOffset,
                limit,
                timeout
            }
        )


        // Process each update
        updates.result.forEach(update => {
            const e = {
                postData: {
                    contents: update
                }
            };


            // Handle the update with 'longPolling' as the source
            this.handleWebhook(e, 'polling');


            // Update the last known offset to the next one after the current update
            const newOffset = update.update_id + 1;
            PropertiesService
                .getUserProperties()
                .setProperty("lastOffset", String(newOffset))

        });

    }


    /**
     * Sets up a webhook for receiving updates in development.
     * @param {Object} e - The event object.
     * @param {Object} options - The options including certificate, IP address, etc.
     */
    devHook(e, {
        certificate, ip_address,
        max_connections,
        drop_pending_updates,
        secret_token, server } = {}) {

        if (e) { this.handleWebhook(e) }

        const appUrl = Utils.validateAppUrl(server);
        const userAccessToken = Utils.validateOAuthToken();
        const scriptId = Utils.validateScriptId();
        const hookUrl = Utils.getHookUrl(appUrl, userAccessToken, scriptId);

        try {
            this.setWebhook({
                url: hookUrl, certificate,
                ip_address, max_connections,
                drop_pending_updates, secret_token
            })


            // Return the HTTP response
            return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
                .setMimeType(ContentService.MimeType.JSON);

        } catch (err) {
            throw new TelesunError("DEV_HOOK_FAILED", err.message)
        }
    }

    /**
     * Configures the webhook for the bot.
     * @param {Object} options - Webhook configuration options.
     */
    setWebhook({ url, certificate,
        ip_address, max_connections,
        drop_pending_updates, secret_token }) {

        const res = Utils.apiRequest(this.botToken, "setWebhook",
            {
                url,
                certificate,
                ip_address,
                max_connections,
                allowed_updates: CONFIG.ALLOWED_UPDATES,
                drop_pending_updates,
                secret_token,
            })

        Logger.log(res)
        return res;
    }


    /**
     * Deletes the configured webhook.
     * @param {Object} [options={}] - Options to drop pending updates.
     * @returns {Object} The result of the deleteWebhook API request.
     */
    deleteWebhook({ drop_pending_updates } = {}) {
        const res = Utils.apiRequest(
            this.botToken,
            "deleteWebhook",
            { drop_pending_updates }
        )

        Logger.log(res)
        return res;
    }
};
