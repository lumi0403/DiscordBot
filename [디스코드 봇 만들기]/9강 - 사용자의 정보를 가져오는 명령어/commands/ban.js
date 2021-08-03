module.exports = {
    name: "ban",
    execute(message) {
        if(!message.members.hasPermission("BAN_MEMBERS")) return message.reply("당신은 권한이 부족합니다.")
        let user = message.mentions.members.first()
        if(!user) return message.reply("사용자를 찾을 수 없습니다.")
        if(user.hasPermission("BAN_MEMBERS")) return message.reply("본 유저는 추방 할 수 없습니다.")
        user.ban()
    }
}