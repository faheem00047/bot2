module.exports.config = {
	name: "approve",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Anup Kumar",
	description: "approve the gc using bots xD",
	commandCategory: "Admin",
    cooldowns: 1
};


const dataPath = __dirname + "/Anup-Dark-Rulex/approvedThreads.json";
const dataPending = __dirname + "/Anup-Dark-Rulex/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`» Successfully approved the box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `=====「 GC THAT HAD BEEN APPROVED: ${data.length} 」 ====`;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `=====「 THREADS NEED TO BE APPROVE: ${dataP.length} 」 ====`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 APPROVE 」=====\n\n${pb}${nmdl} l/list => see list of approved boxes\n\n${pb}${nmdl} p/pending => see the list of unapproved boxes\n\n${pb}${nmdl} d/del => with ID to remove from bot used list\n\n${pb}${nmdl} => Attach an ID to browse that box\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("[ ERR ] Not a number", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[ ERR ] Box is not pre-approved!", threadID, messageID);
      api.sendMessage(`[ OK ] Your group has been removed from the browsing list by the admin for the reason: ${lydo}`, idBox);
    	api.sendMessage(`[ OK ] Box has been removed from the list of allowed bots`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ ERR ] The ID you entered is not valid", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`[ - ] ID ${idBox} pre-approved!`, threadID, messageID);
   	else api.sendMessage("[ OK ] Your group has been approved by the admin", idBox, (error, info) => {
   		api.changeNickname(` 》${global.config.PREFIX}《   ➠${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
   let admID = "100029722602303";    
  
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");  
      
      axios.get('https://api.satou-chan.xyz/api/endpoint/happy').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `❒❒ 𝘽𝙊𝙏 𝙄𝙎 𝙉𝙊𝙒 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 ❒❒\n=====================\n⚠️ℍ𝕌𝕄  𝔹ℍ𝕀 ℍ𝕆ℕ 𝔾𝕐 𝔹𝔼𝕎𝔸𝔽𝔸 𝕂𝔸ℍ𝔼ℕ 𝕂𝕀𝕊𝕀 𝕂𝕀 ℤ𝕀ℕ𝔻𝔸𝔾𝕀 𝕄𝔼 !!!!!!⚠️\n=====================\n➪ 𝔹𝕆𝕋: ${global.config.BOTNAME}\n➪ ℙℝ𝔼𝔽𝕀𝕏: ${global.config.PREFIX}\n➪ 𝕌𝕊𝔼ℝ𝕊: ${global.data.allUserID.length}\n➪ 𝔾ℝ𝕆𝕌ℙ𝕊: ${global.data.allThreadID.length}\n=====================\n[]---------------------------------------[]\n𝕌𝕊𝔼 '${global.config.PREFIX}ℍ𝔼𝕃ℙ' 𝕋𝕆 𝕍𝕀𝔼𝕎 𝕋ℍ𝔼 ℂ𝕆𝕄𝕄𝔸ℕ𝔻𝕊 𝕋ℍ𝔸𝕋 𝔸𝕍𝔸𝕀𝕃𝔸𝔹𝕃𝔼!\n[]---------------------------------------[]\n⌨ 𝕄𝔸𝔻𝔼 𝔹𝕐: ${firstname}\n`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
      })
   		if (error) return api.sendMessage("[ ERR ] Something went wrong, make sure the id you entered is valid and the bot is in the box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`[ OK ] Successfully approved the box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
          }