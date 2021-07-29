const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log("봇이 준비되었습니다.")
})

client.on('message', msg => {
    if(msg.content === "핑") {
        msg.reply("퐁!")
    }
})

client.login('')