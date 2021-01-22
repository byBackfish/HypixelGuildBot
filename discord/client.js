const config = require('../config.json')
const Discord = require('discord.js')

const index = require('../index')



module.exports = {




    login: async (client) =>{

     return new Promise(async (res, rej) =>{
       

    client.login(config.discord.token).then(() =>{
        console.log(`Discord Bot Started as ${client.user.tag}`)
        res();
    }).catch((err) =>{
        rej(err)
    })


        
    })
    

    
    


    },

    getChannel: () =>{

        return index.getClient().channels.cache.get(config.discord.channel)


    }


}