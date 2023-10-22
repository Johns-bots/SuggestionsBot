const Command = require('../../structures/Command');
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'decline',
        aliases: ["decline", "declinesuggestion"],
        description: `Declines a suggestion. **Must be able to Manage Messages**`,
        category: 'Suggestions',
        cooldown: 3,
        userPermission: ['MANAGE_MESSAGES']
      });
    }

    async run(message, args) {
      const channelId = `${config.logChannelID}`; 
      const logChannel = message.guild.channels.cache.get(channelId);

        let channel;
        if(config.suggestion_channel_id){
          channel = await message.guild.channels.cache.get(config.suggestion_channel_id)
        } else channel = await message.guild.channels.cache.find(c => c.name == "suggestion" && c.type == "text");
  
        if(!channel){
        return message.channel.send(`${message.client.emoji.fail} | I could not find the suggestion channel in the current guild.`)
        };
        
        let messageS = args[0];
        if(!messageS){
          return message.channel.send(`${message.client.emoji.fail} | Please provide me with a message ID`)
        };
  
        
     try {
  
      var suggestionmessage = await channel.messages.fetch(messageS)
      
      } catch {
  
        return message.channel.send(`${message.client.emoji.fail} | I could not find the following message`)
                 
      };
  
      let reason = args.splice(1).join(" ")
      if(!reason) reason = `No Reason Provided`
  
      const description = suggestionmessage.embeds[0].description;
      const footer = suggestionmessage.embeds[0].footer.text;
      
      if(!suggestionmessage.embeds[0]){
          return message.channel.send(`Invalid Suggestion`)
      };
  
      if(suggestionmessage.embeds[0].color !== `blue`) {

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Suggestion Denied')
        .setDescription(`${description}\n\n__**Declined by:**__ ${message.author.tag}\n__**Reason:**__ ${reason}`)
        .setFooter(footer)
        .setColor(message.client.color.red)

        const log = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setAuthor(`${message.author.tag}`)
        .setDescription(`Suggestion declined by <@${message.author.id}> in <#${config.suggestion_channel_id}>\n Link to suggestion: ${suggestionmessage.url}`)
        .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`)
        .setTimestamp()
        .setColor(message.client.color.red)

        logChannel.send(log)
        suggestionmessage.edit(newEmbed);
        message.delete();
  
      } else {
        logChannel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL()).setAuthor(`${message.author.tag}`).setDescription(`Attempted suggestion acception failed \n Link to suggestion: ${suggestionmessage.url}`).setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`).setTimestamp().setColor(message.client.color.green))
       return message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`The following suggestion can't be accepted\n Contact <@630070645874622494> if this is not the case.`).setFooter(`${message.author.id}`).setTimestamp().setColor('RED'))
      }
          };
          
        };      