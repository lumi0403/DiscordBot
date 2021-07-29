module.exports = {
    name: "ping",
    cooldown: 5,
    execute(message) {
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setTitle("답변").setDescription("Pong").setColor("#FFFFF").addField("핑",  "퐁").setAuthor("개발자 지원").setThumbnail("https://yt3.ggpht.com/ytc/AKedOLSN3OvVYaZNRd92Xv_88OoXgXPCfDkYOOArIIrq=s48-c-k-c0x00ffffff-no-rj").setImage("https://cdn.discordapp.com/icons/815166438020349962/80fc44b520e17992ec77fa70ade5c13c.webp?size=128"))
    }
}