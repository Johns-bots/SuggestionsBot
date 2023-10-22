const Command = require('../../structures/Command');
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'ping',
        aliases: ["ping", "latency"],
        description: `Display\'s ${config.bot_name} Ping Latency.`,
        category: 'Information',
        cooldown: 3,
      });
    }

    async run(message) {

        const msg = await message.channel.send('Pinging...');
        const latency = msg.createdTimestamp - message.createdTimestamp;
        const channelId = `${config.logChannelID}`; 
        const logChannel = message.guild.channels.cache.get(channelId);
  
        const pingEmbed = new Discord.MessageEmbed()
        .setTitle(`${config.bot_name} Ping`)
        .setDescription(`Time taken: ${latency}ms \nDiscord API: ${Math.round(this.client.ws.ping)}ms`)
        .setTimestamp()
        .setColor(message.client.color.green)

        msg.edit(pingEmbed);

        const log = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setAuthor(`${message.author.tag}`)
        .setDescription(`Ping command sent by <@${message.author.id}>`)
        .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`)
        .setTimestamp()
        .setColor(message.client.color.blue)
        logChannel.send(log)


      }
};