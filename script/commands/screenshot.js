module.exports.config = {
	name: "screenshot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Screenshot má»™t trang web nÃ o Ä‘Ã³ (NOT ALLOW NSFW PAGE)",
	commandCategory: "other",
	usages: "[url site]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": "",
        "url": ""
    }
};

module.exports.onLoad = async () => {
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, }) => {
    const { readFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const url = global.nodemodule["url"];

    if (!global.moduleData.pornList) global.moduleData.pornList = readFileSync(__dirname + "/cache/pornlist.txt", "utf-8").split('\n').filter(site => site && !site.startsWith('#')).map(site => site.replace(/^(0.0.0.0 )/, ''));
    const urlParsed = url.parse(args[0]);

    if (global.moduleData.pornList.some(pornURL => urlParsed.host == pornURL)) return api.sendMessage("Trang web báº¡n nháº­p khÃ´ng an toÃ n!!(NSFW PAGE)", event.threadID, event.messageID);

    try {
        const path = __dirname + `/cache/${event.threadID}-${event.senderID}s.png`;
        await global.utils.downloadFile(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${args[0]}`, path);
        api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path));
    }
    catch {
        return api.sendMessage("KhÃ´ng tÃ¬m tháº¥y url nÃ y, Ä‘á»‹nh dáº¡ng khÃ´ng Ä‘Ãºng ?", event.threadID, event.messageID);
    }
  }