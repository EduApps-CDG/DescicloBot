module.exports = {
	client: undefined,
	config: "",
	configData: "",
	spamCount: 1,
	spamUser: undefined,
	spamMessage: "",
	RAM: "",

	prefix: "dp --",
	color: 0xCC0000,
	help: "`help` - mostra a ajuda\n",
	configHelp: "",

	dpLinkExecuted: false,

	commands: [
		'help'
	],
	
	settings: {
		welcomeMessages: true,
		dpLink: false,
		dpLinkTime: 90000
	},

	save: async function(t,msg) {
		const fs = require('fs');
		if ( t.charAt( 0 ) == '"' ) {
			fs.writeFile("./configs/" + msg.guild.id + ".json",t.replace("\"","{"),function() {});
		} else {
			fs.writeFile("./configs/" + msg.guild.id + ".json",t,function() {});
		}
	}
}