const TEST_BOT_METHODS = {
  telesun: undefined,

  createConnection() {
    this.telesun = new Telesun("6108982890:AAELd8yLBHmD3EIw_6op5EXgEpcNLEfhFtg")
    Logger.log(Test_Constants().TEST_TITLES.telesun)
  },

  methodUse() {
    Context.api = Test_Constants().channel_post;
    this.createConnection()
    this.telesun.Use((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodUse);
      ctx.setStage("hello")//to test method stage
      next()//important, unless the next method would not executed
    })
  },

  methodStage() {
    //connection is already made
    this.telesun.Stage("hello", (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodStage)
      next()
    })
  },

  methodStage_Array() {
    //connection is already made
    this.telesun.Stage(["hello", 'hey'], (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodStage_Array)
      next()
    })
  },

  methodMessage() {
    //connection is already made
    Context.api = Test_Constants().message;
    this.telesun.Message((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodMessage)
      next()
    })
  },

  methodEdited_message() {
    //connection is already made
    Context.api = Test_Constants().edited_message;
    this.telesun.Edited_message((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodEdited_message)
      next()
    })
  },

  methodChannel_post() {
    //connection is already made
    Context.api = Test_Constants().channel_post;
    this.telesun.Channel_post((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodChannel_post)
      next()
    })
  },

  methodEdited_channel_post() {
    //connection is already made
    Context.api = Test_Constants().edited_channel_post;
    this.telesun.Edited_channel_post((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodEdited_channel_post)
      next()
    })
  },

  methodChosen_inline_result() {
    //connection is already made
    Context.api = Test_Constants().chosen_inline_result;
    this.telesun.Chosen_inline_result((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodChosen_inline_result)
      next()
    })
  },

  methodShipping_query() {
    //connection is already made
    Context.api = Test_Constants().shipping_query;
    this.telesun.Shipping_query((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodShipping_query)
      next()
    })
  },

  methodPre_checkout_query() {
    //connection is already made
    Context.api = Test_Constants().pre_checkout_query;
    this.telesun.Pre_checkout_query((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodPre_checkout_query)
      next()
    })
  },

  methodPoll() {
    //connection is already made
    Context.api = Test_Constants().poll;
    this.telesun.Poll((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodPoll)
      next()
    })
  },

  methodPoll_answer() {
    //connection is already made
    Context.api = Test_Constants().poll_answer;
    this.telesun.Poll_answer((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodPoll_answer)
      next()
    })
  },

  methodMy_chat_member() {
    //connection is already made
    Context.api = Test_Constants().my_chat_member;
    this.telesun.My_chat_member((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodMy_chat_member)
      next()
    })
  },

  methodChat_member() {
    //connection is already made
    Context.api = Test_Constants().chat_member;
    this.telesun.Chat_member((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodChat_member)
      next()
    })
  },

  methodChat_join_request() {
    //connection is already made
    Context.api = Test_Constants().chat_join_request;
    this.telesun.Chat_join_request((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodChat_join_request)
      next()
    })
  },

  methodStart() {
    //connection is already made
    Context.api = Test_Constants().start;
    this.telesun.Start((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodStart)
      next()
    })
  },

  methodHelp() {
    //connection is already made
    Context.api = Test_Constants().help;
    this.telesun.Help((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodHelp)
      next()
    })
  },
  methodCbquery() {
    //connection is already made
    Context.api = Test_Constants().cbquery;
    this.telesun.Cbquery((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodCbquery)
      next()
    })
  },
  methodAction() {
    //connection is already made
    Context.api = Test_Constants().cbquery;
    this.telesun.Action('myinline', (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodAction)
      next()
    })
  },
  methodAction_Array() {
    //connection is already made
    Context.api = Test_Constants().cbquery;
    this.telesun.Action(['myinline', 'hey'], (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodAction_Array)
      next()
    })
  },
  methodAction_regEx() {
    //connection is already made
    Context.api = Test_Constants().cbquery;
    this.telesun.Action(/myinline/, (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodAction_regEx)
      next()
    })
  },
  methodHears() {
    //connection is already made
    Context.api = Test_Constants().message;
    this.telesun.Hears('new message haha', (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodHears)
      next()
    })
  },
  methodHears_Array() {
    //connection is already made
    Context.api = Test_Constants().message;
    this.telesun.Hears(['hello', 'new message haha'], (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodHears_Array)
      next()
    })
  },
  methodHears_regEx() {
    //connection is already made
    Context.api = Test_Constants().message;
    this.telesun.Hears(/new/, (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodHears_regEx)
      next()
    })
  },
  methodContact() {
    //connection is already made
    Context.api = Test_Constants().contact;
    this.telesun.Contact((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodContact)
      next()
    })
  },
  methodInline_query() {
    //connection is already made
    Context.api = Test_Constants().inline_query;
    this.telesun.Inline_query((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodInline_query)
      next()
    })
  },
  methodPhoto() {
    //connection is already made
    Context.api = Test_Constants().photo;
    this.telesun.Photo((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodPhoto)
      next()
    })
  },
  methodVoice() {
    //connection is already made
    Context.api = Test_Constants().voice;
    this.telesun.Voice((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodVoice)
      next()
    })
  },
  methodDocument() {
    //connection is already made
    Context.api = Test_Constants().document;
    this.telesun.Document((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodDocument)
      next()
    })
  },
  methodAudio() {
    //connection is already made
    Context.api = Test_Constants().audio;
    this.telesun.Audio((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodAudio)
      next()
    })
  },
  methodText() {
    //connection is already made
    Context.api = Test_Constants().message;
    this.telesun.Text((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodText)
      next()
    })
  },
  methodStiker() {
    //connection is already made
    Context.api = Test_Constants().stiker;
    this.telesun.Stiker((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodStiker)
      next()
    })
  },
  methodCommands() {
    //connection is already made
    Context.api = Test_Constants().start;
    this.telesun.Commands((ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodCommands)
      next()
    })
  },
  methodCommand() {
    //connection is already made
    Context.api = Test_Constants().start;
    this.telesun.Command('start', (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodCommand)
      next()
    })
  },
  methodCommand_Array() {
    //connection is already made
    Context.api = Test_Constants().start;
    this.telesun.Command(['help', 'start'], (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodCommand_Array)
      next()
    })
  },
  methodCommand_regEx() {
    //connection is already made
    Context.api = Test_Constants().start;
    this.telesun.Command(/start/, (ctx, next) => {
      Logger.log(Test_Constants().TEST_TITLES.methodCommand_regEx)
      next()
    })
  }
}




