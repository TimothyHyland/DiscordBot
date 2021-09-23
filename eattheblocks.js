const Discord = require('discord.js');
const client = new Discord.Client();

const {
  prefix,
  token,
  users
} = require('./config.json')
const guild = client.guilds.cache.get();


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

client.once('ready', () => {
  console.log('Listening...');

});
client.login(token);


client.on('message', async message => {
  if (message.channel.type === "dm") return;    //check to make sure its not a Direct Message
  if (message.author.id === client.user.id) {    //make sure this message is not from bot
    return;
  }
  let adminRole = message.guild.roles.cache.find(guild => guild.name === "Administrator");   //change to eattheblocks team
  let modRole = message.guild.roles.cache.find(guild => guild.name === "Moderator");      //change to instructors

    // To ignore all bots (including your own):
    if (message.author.bot) {
    return;
}

const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
if (message.mentions.members.size > 0) {

  let ping = message.mentions.users.first().id
  if (ping === users.Batman) {
    
    
    
    
   const channelz = client.channels.cache.get()
   let currentDate = new Date();
   channelz.send(`The message : "${message.content}" by ${message.author} at ${message.createdAt}. Their ID is ${message.author.id}`);
  }
 };
  
   
}

 

)


  



 
