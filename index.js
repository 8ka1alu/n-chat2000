const Discord = require('discord.js');
const client = new Discord.Client();
let count = 0;

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: 'グローバルチャット' } });  
    console.log('Hallo Warld!!');

    const ch_name = "noa-global-chat";

    client.channels.forEach(channel =>
    {
        if (channel.name === ch_name) 
        {
            channel.send("再起動しました！")
            return;
        }
        return;
    });
})

client.on('message', message =>
{
    message.guild.channels.find("id", "664098210264121374").setName("test!!");

    if (message.channel.name === 'noa-global-chat')
    {
        if (message.author.bot) return;
        if (message.content.match(/discord.gg/)) 
        {
            message.delete(100)
            return;
        }
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'noa-global-chat')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'noa-global-chat')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }    
})

client.login(process.env.BOT_TOKEN);


