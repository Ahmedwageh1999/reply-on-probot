const { Intents, Message, PermissionsBitField, MessageEmbed, MessageActionRow, MessageButton ,  ActionRowBuilder, ButtonStyle, TextInputBuilder,Events, TextInputStyle } = require("discord.js"); // npm i discord.js




const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', async () => {
  function abady() {
    let status = [`uktuk`]
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'STREAMING' })
  };
  //ismailmgde
  setInterval(abady, 5000)

})
client.on("ready", () => {
  console.log(client.user.tag)

})


client.on("messageCreate", async message => {

  if(message.author.bot)return;
    const owner = "472444590868135949";
    const channel = '1066784702251409480';
    const amount = '2';
    const probotID = '282859044593598464';


    if (channel) {
      if(message.author.bot)return;
      const filter = response =>
        response.content.startsWith(
          `**:moneybag: | ${message.author.username}, has transferred `
        ) && response.content.includes(`${owner}`) && response.author.id === probotID && response.content.includes(Number(amount));
      await message.channel.awaitMessages({ filter, max: 1, time: 0 }).then(async collected => {
        

    const button = new MessageActionRow()
    .addComponents(
      new MessageButton ()
      .setCustomId("model")
      .setLabel("Click")
      .setStyle("PRIMARY")
      
      
    )

    const embed = new MessageEmbed()
    .setDescription("please click ")

    await message.channel.send({embeds : [embed] , components : [button]}).then(message =>{
     

      const collector = message.channel.createMessageComponentCollector()
      collector.on ("collect" , async i =>{
      
        if (i.customId === "model"){
        
          await message.channel.send({content : "please write your message" , components :[new MessageActionRow()
            .addComponents(
              new MessageButton ()
              .setCustomId("model")
              .setLabel("Click")
              .setStyle("PRIMARY")
              .setDisabled(true)
              
              
            )]})



           
         


        }



      })



    })

  
  



    })
    

    if(!channel) return;







  }
})



  

































client.login(`MTA1NzAxNjgxNjE1ODkxNjYzOA.GbgsT7.4KxRvqqmPRxZdO7811Ni26HcNUmllXTQpgUG3E`);
