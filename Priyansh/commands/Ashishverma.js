const fs = require("fs");
module.exports.config = {
	name: "Aryan",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(" Shiv ki ladli")==0 || event.body.indexOf("Shiv ki ladli ")==0 || event.body.indexOf("MR Ashish")==0 || event.body.indexOf("@𝐌⃞ʀ ‣⃟ ⃝𑁍 ⃝𝐀ASHISHƞ̈͢VERMAـ圓‣⃟𑁍")==0) {
		var msg = {
				body: "अरे बावले तेरी तो बहन होगी पर मेरी तो सीव की लाडली मेरी वाइफ है दूर रहो उस से  🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
