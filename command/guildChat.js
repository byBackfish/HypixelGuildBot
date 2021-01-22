

module.exports = {


    name: "gc",
    channel: require('../config.json').discord.channel,
    run: (bot, client, message, args) =>{

        

           let rest =  args.join(" ")

           console.log(rest);
            bot.chat("/gc " + author.username + ": " + rest)


    }


}