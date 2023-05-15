function Test_Constants() {
  return {
    channel_post:
    {
      "update_id": 839951946,
      "channel_post": {
        "message_id": 255,
        "sender_chat": {
          "id": -1001504328855,
          "title": "ab-channel",
          "type": "channel"
        },
        "chat": {
          "id": -1001504328855,
          "title": "ab-channel",
          "type": "channel"
        },
        "date": 1683794889,
        "text": "uuuuuu"
      }
    },

    message: {
      "update_id": 839951947,
      "message": {
        "message_id": 105,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683835752,
        "text": "new message haha"
      }
    },

    start: {
      "update_id": 839951955,
      "message": {
        "message_id": 106,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683871574,
        "text": "/start",
        "entities": [
          {
            "offset": 0,
            "length": 6,
            "type": "bot_command"
          }
        ]
      }
    },

    help: {
      "update_id": 839951955,
      "message": {
        "message_id": 106,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683871574,
        "text": "/help",
        "entities": [
          {
            "offset": 0,
            "length": 6,
            "type": "bot_command"
          }
        ]
      }
    },

    edited_message: {
      "update_id": 839951948,
      "edited_message": {
        "message_id": 105,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683835752,
        "edit_date": 1683836222,
        "text": "new message haha, #Edited",
        "entities": [
          {
            "offset": 18,
            "length": 7,
            "type": "hashtag"
          }
        ]
      }
    },

    edited_channel_post: {
      "update_id": 839951950,
      "edited_channel_post": {
        "message_id": 305,
        "sender_chat": {
          "id": -1001504328855,
          "title": "ab-channel",
          "type": "channel"
        },
        "chat": {
          "id": -1001504328855,
          "title": "ab-channel",
          "type": "channel"
        },
        "date": 1683836881,
        "edit_date": 1683836898,
        "text": "hello, boter #Edited",
        "entities": [
          {
            "offset": 13,
            "length": 7,
            "type": "hashtag"
          }
        ]
      }
    },

    inline_query: {
      "update_id": 445803035,
      "inline_query": {
        "id": "5038769749629114553",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat_type": "sender",
        "query": "abd",
        "offset": ""
      }
    },

    chosen_inline_result: {
      "update_id": 445803035,
      "chosen_inline_result": {
        "result_id": "123456789",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "location": {
          "longitude": 12.3456,
          "latitude": 78.9012
        },
        "inline_message_id": "987654321",
        "query": "example query"
      }
    },

    shipping_query: {
      "update_id": 445803035,
      "shipping_query":
      {
        "id": "987654321",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "invoice_payload": "example_payload",
        "shipping_address": {
          "country_code": "US",
          "state": "California",
          "city": "Los Angeles",
          "street_line1": "123 Main St",
          "street_line2": "",
          "post_code": "90001"
        }
      }
    },

    pre_checkout_query: {
      "update_id": 445803035,
      "pre_checkout_query":
      {
        "id": "123456789",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "currency": "USD",
        "total_amount": 145,
        "invoice_payload": "example_payload",
        "shipping_option_id": "shipping_option_123",
        "order_info": {
          "name": "Jane Doe",
          "phone_number": "+1234567890",
          "email": "jane.doe@example.com",
          "shipping_address": {
            "country_code": "US",
            "state": "California",
            "city": "Los Angeles",
            "street_line1": "123 Main St",
            "street_line2": "",
            "post_code": "90001"
          }
        }
      }

    },

    poll: {
      "update_id": 445803035,
      "poll":
      {
        "id": "123456789",
        "question": "What is your favorite color?",
        "options": [
          {
            "text": "Red",
            "voter_count": 10
          },
          {
            "text": "Blue",
            "voter_count": 15
          },
          {
            "text": "Green",
            "voter_count": 5
          }
        ],
        "total_voter_count": 30,
        "is_closed": false,
        "is_anonymous": true,
        "type": "regular",
        "allows_multiple_answers": false
      }

    },

    poll_answer: {
      "update_id": 445803035,
      "poll_answer":
      {
        "poll_id": "123456789",
        "user": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "option_ids": [0, 2]
      }
    },

    my_chat_member: {
      "update_id": 445803035,
      "my_chat_member": {
        "chat": {
          "id": 123456789,
          "type": "group",
          "title": "Group Chat"
        },
        "from": {
          "id": 987654321,
          "is_bot": false,
          "first_name": "John",
          "last_name": "Doe",
          "username": "johndoe"
        },
        "date": 1621214400,
        "old_chat_member": {
          "user": {
            "id": 123456789,
            "is_bot": false,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith"
          },
          "status": "member"
        },
        "new_chat_member": {
          "user": {
            "id": 123456789,
            "is_bot": false,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith"
          },
          "status": "administrator"
        }
      }
    },

    chat_member: {
      "update_id": 445803035,
      "chat_member": {
        "chat": {
          "id": 123456789,
          "type": "group",
          "title": "Group Chat"
        },
        "from": {
          "id": 987654321,
          "is_bot": false,
          "first_name": "John",
          "last_name": "Doe",
          "username": "johndoe"
        },
        "date": 1621214400,
        "old_chat_member": {
          "user": {
            "id": 123456789,
            "is_bot": false,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith"
          },
          "status": "member"
        },
        "new_chat_member": {
          "user": {
            "id": 123456789,
            "is_bot": false,
            "first_name": "Jane",
            "last_name": "Smith",
            "username": "janesmith"
          },
          "status": "administrator"
        }
      }
    },

    chat_join_request: {
      "update_id": 445803035,
      "chat_join_request": {
        "chat": {
          "id": 123456789,
          "type": "group",
          "title": "Group Chat"
        },
        "from": {
          "id": 987654321,
          "is_bot": false,
          "first_name": "John",
          "last_name": "Doe",
          "username": "johndoe"
        },
        "user_chat_id": 123456789012345678,
        "date": 1621214400
      }
    },

    cbquery: {
      "update_id": 445803087,
      "callback_query": {
        "id": "5038769751840063667",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "message": {
          "message_id": 2388,
          "from": {
            "id": 5862849341,
            "is_bot": true,
            "first_name": "Telesun Json Dumper bot",
            "username": "telesun_bot"
          },
          "chat": {
            "id": 1173180004,
            "first_name": "Me",
            "last_name": "ab",
            "username": "Me_abd",
            "type": "private"
          },
          "date": 1683872108,
          "text": "My Inline Keyboards",
          "reply_markup": {
            "inline_keyboard": [
              [
                {
                  "text": "My Inline Keyboard",
                  "callback_data": "myinline"
                }
              ]
            ]
          }
        },
        "chat_instance": "1416884194915900964",
        "data": "myinline"
      }
    },

    contact: {
      "update_id": 144286680,
      "message": {
        "message_id": 881920,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683872688,
        "reply_to_message": {
          "message_id": 881919,
          "from": {
            "id": 216729606,
            "is_bot": true,
            "first_name": "Json Dump Bot",
            "username": "JsonDumpBot"
          },
          "chat": {
            "id": 1173180004,
            "first_name": "Me",
            "last_name": "ab",
            "username": "Me_abd",
            "type": "private"
          },
          "date": 1683872683,
          "text": "Please select a command"
        },
        "contact": {
          "phone_number": "+251941284888",
          "first_name": "Me",
          "last_name": "ab",
          "user_id": 1173180004
        }
      }
    },

    inline_query: {
      "update_id": 445803085,
      "inline_query": {
        "id": "5038769752673608493",
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat_type": "sender",
        "query": "",
        "offset": ""
      }
    },
    photo: {
      "update_id": 445803089,
      "message": {
        "message_id": 2393,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683873091,
        "photo": [
          {
            "file_id": "AgACAgQAAxkBAAIJWWRd3UPJSgT4cZvdzCAOjs9ZG6RxAAKPvTEbMZfxUm7mKqyiq3m5AQADAgADcwADLwQ",
            "file_unique_id": "AQADj70xGzGX8VJ4",
            "file_size": 664,
            "width": 86,
            "height": 90
          },
          {
            "file_id": "AgACAgQAAxkBAAIJWWRd3UPJSgT4cZvdzCAOjs9ZG6RxAAKPvTEbMZfxUm7mKqyiq3m5AQADAgADbQADLwQ",
            "file_unique_id": "AQADj70xGzGX8VJy",
            "file_size": 7175,
            "width": 306,
            "height": 320
          },
          {
            "file_id": "AgACAgQAAxkBAAIJWWRd3UPJSgT4cZvdzCAOjs9ZG6RxAAKPvTEbMZfxUm7mKqyiq3m5AQADAgADeAADLwQ",
            "file_unique_id": "AQADj70xGzGX8VJ9",
            "file_size": 28263,
            "width": 765,
            "height": 800
          },
          {
            "file_id": "AgACAgQAAxkBAAIJWWRd3UPJSgT4cZvdzCAOjs9ZG6RxAAKPvTEbMZfxUm7mKqyiq3m5AQADAgADeQADLwQ",
            "file_unique_id": "AQADj70xGzGX8VJ-",
            "file_size": 31180,
            "width": 902,
            "height": 943
          }
        ]
      }
    },

    voice: {
      "update_id": 445803090,
      "message": {
        "message_id": 2395,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683873274,
        "voice": {
          "duration": 1,
          "mime_type": "audio/ogg",
          "file_id": "AwACAgQAAxkBAAIJW2Rd3frb6AcmjCmx1yHeGfrDeFryAAJLDQACMZfxUhsGv4WrimrvLwQ",
          "file_unique_id": "AgADSw0AAjGX8VI",
          "file_size": 6565
        }
      }
    },

    document: {
      "update_id": 445803091,
      "message": {
        "message_id": 2397,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683873441,
        "document": {
          "file_name": "chatting with elon musk.png",
          "mime_type": "image/png",
          "thumbnail": {
            "file_id": "AAMCBAADGQEAAgldZF3eoYkzi4wflC1i-TzaxDqD20gAAkwNAAIxl_FSZLxchPeER3YBAAdtAAMvBA",
            "file_unique_id": "AQADTA0AAjGX8VJy",
            "file_size": 5907,
            "width": 306,
            "height": 320
          },
          "thumb": {
            "file_id": "AAMCBAADGQEAAgldZF3eoYkzi4wflC1i-TzaxDqD20gAAkwNAAIxl_FSZLxchPeER3YBAAdtAAMvBA",
            "file_unique_id": "AQADTA0AAjGX8VJy",
            "file_size": 5907,
            "width": 306,
            "height": 320
          },
          "file_id": "BQACAgQAAxkBAAIJXWRd3qGJM4uMH5QtYvk82sQ6g9tIAAJMDQACMZfxUmS8XIT3hEd2LwQ",
          "file_unique_id": "AgADTA0AAjGX8VI",
          "file_size": 38992
        }
      }
    },

    audio: {
      "update_id": 445803092,
      "message": {
        "message_id": 2399,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683873592,
        "audio": {
          "duration": 264,
          "file_name": "ምህረት ድንቅ ነው.mp3",
          "mime_type": "audio/mpeg",
          "file_id": "CQACAgQAAxkBAAIJX2Rd3zfDGCyNDu0o57-Bj6-HBH6rAAKYCgACPFqIUvEKE3OFvz69LwQ",
          "file_unique_id": "AgADmAoAAjxaiFI",
          "file_size": 6337634
        },
        "caption": "New Amharic song\nhttps://t.me/Reformed504\n#Share #Share",
        "caption_entities": [
          {
            "offset": 17,
            "length": 24,
            "type": "url"
          },
          {
            "offset": 42,
            "length": 6,
            "type": "hashtag"
          },
          {
            "offset": 49,
            "length": 6,
            "type": "hashtag"
          }
        ]
      }
    },

    stiker: {
      "update_id": 445803093,
      "message": {
        "message_id": 2401,
        "from": {
          "id": 1173180004,
          "is_bot": false,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "language_code": "en"
        },
        "chat": {
          "id": 1173180004,
          "first_name": "Me",
          "last_name": "ab",
          "username": "Me_abd",
          "type": "private"
        },
        "date": 1683873908,
        "sticker": {
          "width": 512,
          "height": 512,
          "emoji": "😂",
          "set_name": "HotCherry",
          "is_animated": true,
          "is_video": false,
          "type": "regular",
          "thumbnail": {
            "file_id": "AAMCAgADGQEAAglhZF3gdC-4swwaEptvd5_uwH-3wdsAAgEAA8A2TxMYLnMwqz8tUQEAB20AAy8E",
            "file_unique_id": "AQADAQADwDZPE3I",
            "file_size": 2750,
            "width": 128,
            "height": 128
          },
          "thumb": {
            "file_id": "AAMCAgADGQEAAglhZF3gdC-4swwaEptvd5_uwH-3wdsAAgEAA8A2TxMYLnMwqz8tUQEAB20AAy8E",
            "file_unique_id": "AQADAQADwDZPE3I",
            "file_size": 2750,
            "width": 128,
            "height": 128
          },
          "file_id": "CAACAgIAAxkBAAIJYWRd4HQvuLMMGhKbb3ef7sB_t8HbAAIBAAPANk8TGC5zMKs_LVEvBA",
          "file_unique_id": "AgADAQADwDZPEw",
          "file_size": 8244
        }
      }
    },

    TEST_TITLES: {
      setCacheValue: ' ✅ ⚡️✨ Test for Saving Cache Value⚡️✨',
      getCacheByKey: ' ✅ ⚡️✨ Test for Retrieving Cache Value⚡️✨',
      getCacheValuesByKeys: ' ✅ ⚡️✨ Test for Retrieving Cache Values⚡️✨',
      setCacheValues: ' ✅ ⚡️✨ Test for Saving Cache Values⚡️✨',
      removeCacheByKey: ' ✅ ⚡️✨ Test for Removing Cache Value⚡️✨',
      removeCacheByKeys: ' ✅ ⚡️✨ Test for Removing Cache Values⚡️✨',

      telesun: '✅ ⚡️✨ Testing For Telesun Function ⚡️✨',
      methodUse: '✅ ⚡️✨ Testing For Bot.Use Method ⚡️✨',
      methodStage: '✅ ⚡️✨ Testing For Bot.Stage Method ⚡️✨',
      methodStage_Array: '✅ ⚡️✨ Testing For Bot.Stage Method with Array input ⚡️✨',
      methodMessage: '✅ ⚡️✨ Testing For Bot.Message Method ⚡️✨',
      methodEdited_message: '✅ ⚡️✨ Testing For Bot.Edited_message Method ⚡️✨',
      methodChannel_post: '✅ ⚡️✨ Testing For Bot.Channel_post Method ⚡️✨',
      methodEdited_channel_post: '✅ ⚡️✨ Testing For Bot.Edited_channel_post Method ⚡️✨',
      methodChosen_inline_result: '✅ ⚡️✨ Testing For Bot.Chosen_inline_result Method ⚡️✨',
      methodShipping_query: '✅ ⚡️✨ Testing For Bot.Shipping_query Method ⚡️✨',
      methodPre_checkout_query: '✅ ⚡️✨ Testing For Bot.Pre_checkout_query Method ⚡️✨',
      methodPoll: '✅ ⚡️✨ Testing For Bot.Poll Method ⚡️✨',
      methodPoll_answer: '✅ ⚡️✨ Testing For Bot.Poll_answer Method ⚡️✨',
      methodMy_chat_member: '✅ ⚡️✨ Testing For Bot.My_chat_member Method ⚡️✨',
      methodChat_member: '✅ ⚡️✨ Testing For Bot.Chat_member Method ⚡️✨',
      methodChat_join_request: '✅ ⚡️✨ Testing For Bot.Chat_join_request Method ⚡️✨',
      methodStart: '✅ ⚡️✨ Testing For Bot.Start Method ⚡️✨',
      methodHelp: '✅ ⚡️✨ Testing For Bot.Help Method ⚡️✨',
      methodCbquery: '✅ ⚡️✨ Testing For Bot.Cbquery Method ⚡️✨',
      methodAction: '✅ ⚡️✨ Testing For Bot.Action Method ⚡️✨',
      methodAction_Array: '✅ ⚡️✨ Testing For Bot.Action Method with Array input ⚡️✨',
      methodAction_regEx: '✅ ⚡️✨ Testing For Bot.Action Method with regEx input ⚡️✨',
      methodHears: '✅ ⚡️✨ Testing For Bot.Hears Method ⚡️✨',
      methodHears_Array: '✅ ⚡️✨ Testing For Bot.Hears Method with Array Input ⚡️✨',
      methodHears_regEx: '✅ ⚡️✨ Testing For Bot.Hears Method with regEx Input ⚡️✨',

      methodContact: '✅ ⚡️✨ Testing For Bot.Contact Method ⚡️✨',
      methodInline_query: '✅ ⚡️✨ Testing For Bot.Inline_query Method ⚡️✨',
      methodPhoto: '✅ ⚡️✨ Testing For Bot.Photo Method ⚡️✨',
      methodVoice: '✅ ⚡️✨ Testing For Bot.Voice Method ⚡️✨',
      methodDocument: '✅ ⚡️✨ Testing For Bot.Document Method ⚡️✨',
      methodAudio: '✅ ⚡️✨ Testing For Bot.Audio Method ⚡️✨',
      methodText: '✅ ⚡️✨ Testing For Bot.Text Method ⚡️✨',
      methodStiker: '✅ ⚡️✨ Testing For Bot.Stiker Method ⚡️✨',
      methodCommands: '✅ ⚡️✨ Testing For Bot.Commands Method ⚡️✨',
      methodCommand: '✅ ⚡️✨ Testing For Bot.Command Method ⚡️✨',
      methodCommand_Array: '✅ ⚡️✨ Testing For Bot.Command Method with array input ⚡️✨',
      methodCommand_regEx: '✅ ⚡️✨ Testing For Bot.Command Method with regEx input ⚡️✨',


      getUserId: '✅ ⚡️✨ Testing For Session.id Method ⚡️✨',
      setSessionValue: '✅ ⚡️✨ Testing For Session.setSessionValue Method ⚡️✨',
      getSession: '✅ ⚡️✨ Testing For Session.getSession Method ⚡️✨',
      getSessionValue: '✅ ⚡️✨ Testing For Session.getSessionValue Method ⚡️✨',
      setSessionValues: '✅ ⚡️✨ Testing For Session.setSessionValues Method ⚡️✨',
      removeSessionValue: '✅ ⚡️✨ Testing For Session.removeSessionValue Method ⚡️✨',
      deleteSession: '✅ ⚡️✨ Testing For Session.deleteSession Method ⚡️✨',

      getUpdates: '✅ ⚡️✨ Testing For getUpdates Update Type ⚡️✨',
      setWebHook: '✅ ⚡️✨ Testing For setWebHook Update Type ⚡️✨',
      deleteWebhook: '✅ ⚡️✨ Testing For deleteWebhook Update Type ⚡️✨',
      getWebhookInfo: '✅ ⚡️✨ Testing For getWebhookInfo Update Type ⚡️✨',

      sheetConnect: '✅ ⚡️✨ Testing For sheetConnect Database Instance ⚡️✨',
      appendRow: '✅ ⚡️✨ Testing For appendRow Database Method ⚡️✨',
      clearFullSheet: '✅ ⚡️✨ Testing For clearFullSheet Database Method ⚡️✨',
      clearByRange: '✅ ⚡️✨ Testing For clearByRange Database Method ⚡️✨',
      clearValue: '✅ ⚡️✨ Testing For clearValue Database Method ⚡️✨',
      findOne: '✅ ⚡️✨ Testing For findOne Database Method ⚡️✨',
      findAll: '✅ ⚡️✨ Testing For findOne Database Method ⚡️✨',
      deleteColumn: '✅ ⚡️✨ Testing For deleteColumn Database Method ⚡️✨',
      deleteColumns: '✅ ⚡️✨ Testing For deleteColumns Database Method ⚡️✨',
      deleteRow: '✅ ⚡️✨ Testing For deleteRow Database Method ⚡️✨',
      getSheetData: '✅ ⚡️✨ Testing For getSheetData Database Method ⚡️✨',
      getLastColumn: '✅ ⚡️✨ Testing For getLastColumn Database Method ⚡️✨',
      getLastRow: '✅ ⚡️✨ Testing For getLastColumn Database Method ⚡️✨',
      insertColumnAfter: '✅ ⚡️✨ Testing For insertColumnAfter Database Method ⚡️✨',
      insertColumnBefore: '✅ ⚡️✨ Testing For insertColumnBefore Database Method ⚡️✨',
      insertColumns: '✅ ⚡️✨ Testing For insertColumns Database Method ⚡️✨',
      insertColumnsBefore: '✅ ⚡️✨ Testing For insertColumnsBefore Database Method ⚡️✨',
      insertColumnsAfter: '✅ ⚡️✨ Testing For insertColumnsAfter Database Method ⚡️✨',
      insertRowAfter: '✅ ⚡️✨ Testing For insertRowAfter Database Method ⚡️✨',
      insertRowBefore: '✅ ⚡️✨ Testing For insertRowBefore Database Method ⚡️✨',
      insertRows: '✅ ⚡️✨ Testing For insertRows Database Method ⚡️✨',
      insertRowsAfter: '✅ ⚡️✨ Testing For insertRowsAfter Database Method ⚡️✨',
      insertRowsBefore: '✅ ⚡️✨ Testing For insertRowsBefore Database Method ⚡️✨',
      moveColumns: '✅ ⚡️✨ Testing For moveColumns Database Method ⚡️✨',
      moveRows: '✅ ⚡️✨ Testing For moveRows Database Method ⚡️✨',
      setName: '✅ ⚡️✨ Testing For setName Database Method ⚡️✨',
      sortByColumn: '✅ ⚡️✨ Testing For sortByColumn Database Method ⚡️✨',
      saveOne: '✅ ⚡️✨ Testing For saveOne Database Method ⚡️✨',
      saveMany: '✅ ⚡️✨ Testing For saveMany Database Method ⚡️✨',
      getValue: '✅ ⚡️✨ Testing For getValue Database Method ⚡️✨',
      getValues: '✅ ⚡️✨ Testing For getValues Database Method ⚡️✨',
    }
  }
}
