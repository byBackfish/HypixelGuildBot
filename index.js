const discord = require('discord.js')
const mineflayer = require("mineflayer")

const fs = require('fs')
const config = require('./config.json')

const { createBot, add, addPatterns } = require('./minecraft/bot')
const { login } = require('./discord/client')

const client = new discord.Client();

let bot = createBot();
addPatterns(bot);

client.commands = new discord.Collection();

let prefix = "/"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.on('line', (message) =>{


  if(message === "restart"){
    this.newBot();
  }

  if(message.startsWith('chat')){


    let rest = message.slice(5);

    bot.chat(rest);

  }

})



const mineflayerViewer = require('prismarine-viewer').mineflayer;
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true })
})

login(client).then(() =>{

})







module.exports.getBot = () =>{
  return bot;
}

module.exports.getClient = () =>{

    return client;
  
}

module.exports.newBot = () => {
  bot = createBot();
  addPatterns(bot);
}


// MESSAGE AND HANDLER STUFF

fs.readdir("./handler/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) return console.log("There are no events to load...");
  console.log(`Loading ${jsfiles.length} events...`);
  jsfiles.forEach((f, i) => {
      require(`./handler/${f}`)(bot, client);
  });
});

fs.readdir("./command/", (err, files) => {

if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
  console.log("Couldn't find commands.");
  return;
}
console.log(`Loading ${jsfile.length} commands...`);
jsfile.forEach((f, i) =>{
  let props = require(`./command/${f}`);
  client.commands.set(props.name, props);
});

});

client.on('message', (message) =>{



if(message.author.bot) return;
if(message.channel.type === "dm") return;


if (!message.content.startsWith(prefix)){ return;}
  
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = client.commands.get(cmd.slice(prefix.length));
if(commandfile){

  let owneronly = commandfile.ownerOnly || false
    if(commandfile.ownerOnly){
      if(!message.author.id === "369005267158827024") return;
      
    
  if(commandfile.channel)
    if(!commandfile.channel.split("|").includes(channel.id))
    return;


commandfile.run(bot, client ,message,args);

}

}

});
