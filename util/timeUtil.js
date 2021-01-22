module.exports = {


     sleep: (ms) =>{
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      },
    
       formatTime: ()=>{
    
    
        let name = "byBackfish";
    
    let date = new Date();
    
    let hour = date.getHours().toString();
    
    let minutes = date.getMinutes().toString();
    
    if(hour.length == 1){
    hour = "0" + hour
    }
    
    if(minutes.length == 1){
    minutes = "0" + minutes
    }
    
    
    return hour + ":" + minutes;
    
      }
    
    

}