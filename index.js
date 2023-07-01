const {token} = require("./config.json")
const {Client , IntentsBitField } = require("discord.js");
const gamefuncs = require("./commands")
const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
    ]
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function rplmsg(input){
    interation.reply(input)
}
client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("interactionCreate", (interation) => {
    if(!interation.isChatInputCommand()) return;
    if(interation.commandName == "game"){
        gamefuncs.TruthorDare(interation)
    }
})
client.login(token)

