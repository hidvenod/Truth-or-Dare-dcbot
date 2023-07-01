const { REST,Routes,ApplicationCommandOptionType } = require("discord.js")
const {token,clientID,guildID} = require("./config.json");


const command = [{
    name : "game",
    description : "開始一場真心話大冒險吧",
    options : [{
      name : "role",
      description : "從身分組持有者中隨機挑選出出題者與被問者",
      type : ApplicationCommandOptionType.Role,
      required : true
    },
    {
      name : "probability",
      description : "抽中大冒險的%數，介於0~100",
      type : ApplicationCommandOptionType.Number,
      required : true
    }]
}]

const rest = new REST({version:10}).setToken(token);

(async () => {
    try {
      console.log('Registering slash commands...');
  
      await rest.put(
        Routes.applicationGuildCommands(
          clientID,
          guildID
        ),
        { body: command }
      );
      console.log("Done")
  
    } catch (error) {
      console.log(error);
    }
  })();