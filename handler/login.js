
const config = require('../config.json')
module.exports = function (bot, client) {


    bot.on("login", () => {
        console.log(`Logged in as ${bot.username} on ${config.minecraft.host || "mc.hypixe.net"}`)
        console.log("Warping to Housing in 10 Seconds...");

        bot.chat("/fl")
        
        setTimeout(() => {
          bot.chat(`/home ${config.minecraft.housing || "byBackfish"}`);
          console.log("Warped to Housing!");
        }, 10 * 1000);
      });
    

    
}