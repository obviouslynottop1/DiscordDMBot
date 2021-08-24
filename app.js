const { Intents } = require('discord.js')
const discord = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const client = new discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ]
})
client.on('ready', () => {
    console.log('Bot has connected.')
	const interval = setInterval(function() {
		client.users.fetch('USERIDHERE', false).then((user) => {
			user.send('TextYouWantToSendHere');
		   });	
		   console.log("sent")
	  }, 5000);	
})
client.login(process.env.TOKEN)