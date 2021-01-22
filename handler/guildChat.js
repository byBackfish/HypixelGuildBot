const index = require('../index')
const Discord = require('discord.js')

const dc = require('../discord/client.js')

const {sleep,formatTime} = require('../util/timeUtil')

const config = require('../config.json')

var blockedworkds = ["willkommen", "welcome"]

var ratelimited = false;

var tosend = [];

module.exports = function (bot, client) {

    bot.on("guild_chat", (rank, username ,guildrank = "",  message) => {


        console.log(rank + " " + username +  guildrank  + " sent " + message);

       
        let name = username + (guildrank || " ") + " - " + formatTime();

        if(ratelimited)
        tosend.push(username + "|" + message);
          
        
        if(username === bot.username) return;
  
       blockedworkds.forEach(block =>{
        if(message.toLowerCase().includes(block)) return;
       })
  
        
  
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Guild Portal")
        .addField(name, message)
        .setFooter('Made with ❤ by byBackfish#3426');
  
  
        client.channels.cache.get(config.discord.channel).send(embed)
    
  


      });

    
      client.on('rateLimit',  async (info) =>{

        console.log(`Rate Limit Reached (${info.limit}) Next one in ${info.timeout}`);
      
        ratelimited = true;
      
        await sleep(info.timeout).then(() =>{
          ratelimited = false;
          console.log("Ratelimit over");
      
          recover();
      
      
        })
    })



    
}


function recover(){



    tosend.forEach((obj) =>{
      if(ratelimited) return;
  
      let name = obj.split("|")[0]
      let message = obj.split("|")[1];
  
      const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Guild Portal")
      .addField(name, message)
      .setFooter('Made with ❤ by byBackfish#3426');
  
  
      tosend = tosend.filter(function(item) {
        return item !== obj;
    })
    
    console.log("Recovered message! " + tosend.length + " to go");
  
   channel.send(embed)
  
  
    })
  
  }

