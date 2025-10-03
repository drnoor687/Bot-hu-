module.exports.config = {
    name: "help3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SHANKAR-SUMAN",
    description: "beginners guide",
    usages: "[all/-a] [number of pages]",
    commandCategory: "guides",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
    const { commands } = global.client;
    const { threadID } = event;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    
    const commandGroups = new Map();
    const imgP = [];
    
    for (const command of commands.values()) {
        const category = command.config.commandCategory.toUpperCase();
        if (!commandGroups.has(category)) {
            commandGroups.set(category, []);
        }
        commandGroups.get(category).push(`✪${command.config.name}`);
    }
  
    let message = "";
    for (const [category, commands] of commandGroups.entries()) {
        message += `╭────────────✦\n│  ${category}\n├───✦\n`;
        message += `${commands.join(" │")}\n`;
        message += "├───✦\n";
        message += "╰───────────⧕\n\n";
    }
    
    message += `╭────────────✦\n│ »      ☆𝐌𝐚𝐡𝐢 𝐁𝐨𝐭☆ 
    《${commands.size} commands》 
    𝓬𝓻𝓮𝓭𝓲𝓽 ● 𝓭𝓻.☆𝓶𝓾𝓼𝓴𝓪𝓷\n│ » 《𝐌𝐀𝐇𝐈 𝐏𝐑𝐎𝐉𝐄𝐂𝐓》\n𝓯𝓮𝓮𝓵 𝓽𝓱𝓮 𝓹𝓸𝔀𝓮𝓻 𝓸𝓯 𝓭𝓻..𝓶𝓪𝓱𝓲 𝓷𝓸𝓸𝓻\n╰────────────✦`;
    
    return api.sendMessage(message, threadID, (error, info) => {
        if (error) console.log(error);
    });
}