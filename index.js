const express = require('express');
const Command = require('./Command');
const Extra = require('./Extra');
const fs = require('fs');
const Global = require('./Global');
const Discord = require('discord.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('SEXO! <div id="RAM"></div>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const client = new Discord.Client();

//adiciona ao --help:
Command.add('diga','<msg>',"me manda dizer uma mensagem");
Command.add('diga-no-canal','<canal> <msg>',"me manda dizer uma mensagem em determinado canal");
Command.add('minha-pica','',"bora ver quem tem a maior anaconda do servidor?");
Command.add('meme','',"faz gracinha");
Command.add('xvideos','[modo] [tags]',"manda recursos para sua pasta .pr0n");
Command.add('color','<hex>',"troca a cor das minhas mensagens");
Command.add('prefix','<px>',"troca o meu prefixo (padrão `dp --`)");
Command.add('regras','<add|remove> <opts>',"cria/remove uma regra");
Command.add('castigar','<usuário> [H]',"Manda o moleke pro xilindró, morô? `H` é um valor opcional");
Command.add('descastigar','<usuário> [H]',"Policiais corruptos usam essa função frequentemente. `H` é um valor opcional");
Command.add('kick','<usuário> [motivo]',"Chuta um cara pra fora do server.");
Command.add('ban','<usuário> [motivo]',"Expulsa um funkeiro do server.");
Command.add('tempban','<usuário> <M> <D> <H> [motivo]',"Expulsa um funkeiro do server.");
Command.add('config','',"Ativa/desativa funções");

Command.addConfig('welcomeMessages','[true|false]',"Ativa/desativa a função de bem vindo. default: true");
Command.addConfig('dpLinks','[true|false]',"Ativa/desativa links aleatórios da dp. default: false");
Command.addConfig('dpLinkTime','<H> <M> <S>',"troca o intervalo dos links aleatórios da dp. default: 0 1 30");

//quando é ativado...
client.on('ready', async function(msg,guild) {
  	console.log(`Entrei, sou ${client.user.tag}!`);
	client.user.setActivity("tijolos na cabeça do Umanydad");
	//client.channels.cache.find(c => c.type === 'text').send("bot atualizado, configurações resetadas!");
	client.guilds.cache.forEach(g => {      
      g.roles.fetch();
	});
});



//quando envia uma mensagem
client.on('message', async function(msg) {
	console.log("────────────────");
	Global.client = client;
	Extra.verifySpam(msg);

	try {
		if (!fs.existsSync("./configs/" + msg.guild.id + ".json")) {
    		fs.writeFile("./configs/" + msg.guild.id + ".json", '{"prefix": "dp --","color": 13369344,"dpLinkChannel":"0","settings": {"welcomeMessages": true,"dpLink": false,"dpLinkTime": 90000}}',function() {
				
			});
			fs.readFile("./configs/" + msg.guild.id + ".json","utf-8",function(err,data) {
					//console.log("leitura de criação:" + data);
					Global.config = JSON.parse(data);
				});
  		} else {
			fs.readFile("./configs/" + msg.guild.id + ".json","utf-8",function(err,data) {
					//console.log("leitura de entrada:" + data);
				Global.config = JSON.parse(data);
			});
		}
	} catch(err) {
		console.error(err);
	}

	if (!msg.author.bot) {
  		Command.execute(msg);
	}

	if (Global.dpLinkExecuted == false) {
		Command.dpLink(msg);
		Global.dpLinkExecuted = true;
	}
	
	console.log("────────────────");
});

//quando entra alguém novo
client.on('guildMemberAdd', async function(member) {
	if (Global.settings.welcomeMessages) {
  		const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');

		const mensagens = [
			`${member} se juntou à suruba!`,
			`Bem vindo, ${member}! Tome cuidado com o <@&763950486075867146>.`
		]

		const num = Math.floor(Math.random() * (mensagens.length + 1));

  		
    member.guild.channels.get('channelID').send({
			embed: {
				color: Global.color,
				description: mensagens[num]
			}
		});
	}
});


client.login(process.env.DISCORD_TOKEN);