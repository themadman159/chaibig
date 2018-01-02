const Discord = require('discord.js');

const botRem = new Discord.Client();

botBOT.on('ready', () => {
  console.log('Ready!');
});

botBOT.on('message', message => {
  if (message.content === 'กนห') {
    message.reply('กายหน้าหี');
  }
});

botBOT.on('message', message => {
  if (message.content === 'อหด') {
    message.reply('ไอ่เหี้ยดำ');
  }
});
