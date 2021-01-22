const {newBot} = require('../index')

module.exports = function (bot, client) {

    bot.on('end', () =>{

        console.log("Bot Ended!");
        newBot();

    })
    

    
}



