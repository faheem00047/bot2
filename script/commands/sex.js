module.exports.config = {
	name: "sex",
	version: "30.0.10",
	hasPermssion: 0,
	credits: "Dark Rulex Team",
	description: "Nude Image",
	commandCategory: "Nude",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://dark-rulex-vip.0xanupx0.repl.co/gifs').then(res => {
//	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/anear.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anear.jpg`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anear.jpg`)).on("close", callback);
			})
}
