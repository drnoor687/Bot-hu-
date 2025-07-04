module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://l.facebook.com/l.php?u=https%3A%2F%2Fi.ibb.co%2Fjgk6rB0%2F7ce2390636d1a46a331662dbaaf693d6.jpg&h=AT3ZrRZoNnjDCILJvIDoFg87X9M3-EUC_hWGeCrd5W1ZcWktintMa3YO4faJ5bqh-5aHMiJco4hbCh2Mpa2okuhhh8cFaHeyUfmeYSQ9ghHLyNkjDVfmm4iMBvr8UEwxhAoe_qCKEApFm7g&s=1
"
     ];
     var callback = () => api.sendMessage({body:`🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰

   ASHISH. •◡•)

𝐀𝐠𝐞 : 24

𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝐒𝐈𝐍𝐆𝐋𝐄 𝐁𝐇𝐀𝐓𝐀𝐊 𝐑𝐇I 𝐇𝐀𝐈

𝐅𝐫𝐨𝐦 : CHHATTISGARH  (𝐑.𝐉)

𝐒𝐭𝐮𝐝𝐲 : BA final

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤  : https://www.facebook.com/share/16NXatKn7g/Mr.Ashish.verma

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : +91 7600689803

jai shree Ram ji 🥀 🌍❤️🙂!❤🙂♣️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
