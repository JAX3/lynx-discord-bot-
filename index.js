// Const/varibles
const Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');
var permissions = fs.readFileSync("./permissions.txt","utf-8");
var channelid = fs.readFileSync("./channelid.txt","utf-8");


const prefix = "-"; 
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'wJ1yQsJybWwG0dfPZmKfug4LC',
  consumer_secret: 'nIoWvzj8IhfeGFvLnqL1trfwsYvWHgEjZbqnwMvSV9m9njUdJ5',
  access_token_key: '846694014132850688-zuuu6krwUOQ2JVLWJwO74M4fTdmln4T',
  access_token_secret: 'oRYiDhiVUC6IDVS8QzGOf6MkmYBQBDrnihOkeEPvRE4R1'
});
 


bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
  if (message.content.startsWith(prefix+"ping")) {
    message.channel.send("pong!");
  }
});







//twitter
var stream = client.stream('statuses/filter', {track: '#6PWIN'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {

});


//Links and deletion code
bot.on('message', (message) => {
const args = message.content.split(" ").slice(1);
    if (message.content.includes("http://") || message.content.includes("https://") || message.content.includes("www.") || message.content.includes(".com")    ) {
        if (checkPerms(message.author.id)) {} else {
             if(checkchannel(Message.author.id)) {}  else{

                message.delete();
             }
           
        }
    }




/*bot.on('message',(message)=>{
  const args = message.content.split("").slice(1);
if(censor(message.author.id)){}{
message.delete();
}
}
);*/



//discord link 
if(message.content.startsWith(prefix+"discord")){
message.reply("https://discord.gg/3Ew3BbU")

};

//Username code
if(message.content.startsWith(prefix+"username")) {
  if(!checkPerms(message.author.id)) return;
  message.delete().then(() => {
    //Deleted
  }).catch((err) => {
    console.error(err);
  });
  let username = args.slice(0).join(' ');
  if(!username) {
    message.channel.send("Incorrect usuage. Please use `"+prefix+"username <username>`");
  }
  else {
    if(username.length > 32) {
      message.channel.send("Sorry, but a username cannot be longer than `32` characters");
    } else {
      try {
        bot.user.setUsername(username);
      } catch (e) {
        message.channel.send("Oops, there was an error `"+e+"`");
        console.error(e);
      }
    }
  }
}

});


//new user mentions


const newUsers = [];

bot.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 0) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send("```Welcome our new users!```" + userlist);
    newUsers[guild.id].clear();
  }
});






//embed code
bot.on('message', (message) => {
if(message.content.startsWith(prefix+"info")){
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Lynx",
      icon_url:"http://imgur.com/a/iRGaf"
    },
    title: "information",
    
    description: "This contains all of the relevent information on the bot.",
    fields: [{
        name: "Command",
        value: "``-ping``<-- to see if the bot is online."
      },
      {
        name: "Creator",
        value: "Created: JAX."
      },
      {
        name: "6paths",
        value: "MENA Esport Overwatch team"
      }
    ],
    
    footer: {
      icon_url:"http://imgur.com/a/iRGaf",
      text: "© JAX"
    }
  }
});
}});








  










//functions
function checkPerms(id) {
  if(permissions.includes(id)) {
    return true;
  }
  else {
    return false;
  }
}


  function checkchannel(id){
   if (channelid.includes(id)){

    return true;
   }
else{

  return false;
}
  }

/*function censor(id){
  if(censor.includes(id)){
    return false;
  }
else{

  return true;
}
}*/



bot.login('Mjk5MDQyNDM3NTM0NDQ5NjY0.C8Y7Lw.a7Ju6thXpOjm_Wi6a9UQBdM3pGU');