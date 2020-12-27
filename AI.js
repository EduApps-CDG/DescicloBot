module.exports = {
	read: async function(msg) {
//		if ((
//			msg.content.includes("<@!242721083629764608>") ||
//			msg.content.includes("<@242721083629764608>") ||
//			msg.content.includes("<@!164890314924883968>") ||
//			msg.content.includes("<@164890314924883968>") ||
//			msg.content.includes("<@!412704534003974155>") ||
//			msg.content.includes("<@412704534003974155>") ||
//			msg.content.includes("<@!97356039854235648>") ||
//			msg.content.includes("<@97356039854235648>") ||
//			msg.content.includes("<@!366428276635205634>") ||
//			msg.content.includes("<@366428276635205634>") ||
//			msg.content.includes("<@&311359035565932545>")
//			) && !msg.author.bot && !msg.content.startsWith(">")) {
//			msg.channel.send(`QUEM OUSA PINGAR O GRANDE ADMIN?`);
//		} else 
		if(isPing(msg) && msg.content.toLowerCase().includes("manda") && (msg.content.toLowerCase().includes("emote") || msg.content.toLowerCase().includes("emoji") || msg.content.toLowerCase().includes("emoticon"))) {
			var r = [
				":middle_finger:",
				":point_right::ok_hand:",
				":cucumber::tongue:",
				":eggplant::tongue:",
				":regional_indicator_c::regional_indicator_u:",
				":eggplant::peach:",
				"<:BatataDP:741293140421509170>:gun:",
				":earth_americas:                    🚶 🔫 👨‍🚀"
			];

			msg.channel.send(r[Math.floor(Math.random() * r.length)]);
		} else if ((msg.content.includes("<@!763883155987759104>") || msg.content.includes("<@763883155987759104>")) && !msg.author.bot && !msg.content.startsWith(">")) {
			var respostar = [
				"**<@!" + msg.author.id + "> NÃO ME PINGA PORRA!!**",
				"<@!" + msg.author.id + "> vai tomar noku",
				"<@!" + msg.author.id + "> seu corno fiadaputa!",
				`<@!${msg.author.id}> vai pingar o <@!562419742640570368>, porra!`,
				`enfia esse ping no seu cu <@!${msg.author.id}> estupido`
			];

			msg.channel.send(respostar[Math.floor(Math.random() * respostar.length)]);
		}
	}
}

function isPing(msg) {
	return msg.content.toLowerCase().startsWith("<@!763883155987759104>") || msg.content.toLowerCase().startsWith("<@763883155987759104>")
}