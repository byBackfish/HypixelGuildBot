

module.exports = function (bot, client) {

    let recent = []

    bot.on('unmatchedMessage', (message) =>{

        if(recent.includes(message)) return;
        
        if(recent.length >= 10) {
            recent.shift();
        }

        recent.push(message)
        console.log(message);
      })

    
}



