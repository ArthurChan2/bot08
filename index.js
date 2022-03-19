const Discord = require("Discord.js")
require("dotenv").config()
const TOKEN="OTU0NTQwNDEyNzQ2NDk4MTE4.YjUnCA.z6UMyjPaosS_UWd51Q54E7BP6So"
const client = new Discord.Client({
        intents: [
            "GUILDS",
            "GUILD_MESSAGES"
        ]
})
        client.on("ready", () => {
            console.log(`Logged in as ${client.user.tag}`)
        })

client.on("messageCreate",  (message) => {
    if(message.content == "hi"){
        message.reply("hello world!")
    }
})

client.login(process.env.TOKEN)