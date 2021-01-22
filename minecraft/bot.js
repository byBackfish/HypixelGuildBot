const config = require('../config.json')
const mineflayer = require('mineflayer')

module.exports = {



        createBot: () => {


                let bot =  mineflayer.createBot({
                    host: "mc.hypixel.net",
                    port: 25565,
                    username: config.minecraft.username,
                    password: config.minecraft.password,
                    version: config.minecraft.version || "1.13.2",
                    checkTimeoutInterval: config.minecraft.reconnectDelay || (25*1000)
                  });


                
                
        
                  return bot;
        },



        addPatterns: (bot) =>{


                          
                bot.chatAddPattern(
        /^Guild > (\[.*?\])*.*? ([\w\d]{2,17}).*?( \[.*?\])*.*?: (\w*[A-z0-9_ \.\,;:\-_\/]{1,10000})*$/i,
        "guild_chat",
        "A Message in the Guild Chat was sent!"
        );



        bot.chatAddPattern(
                /^From (\[.*?\])*.*? ([\w\d]{2,17}).*?: (\w*[A-z0-9_ \.\,;:\-_\/]{1,10000})*$/i,
                "msg",
                "A d in the Guild Chat was sent!"
                );





        }







}