const Discord = require("discord.js");
const ayarlar = require('../ayarlar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `bilali tten `}, status: 'idle' })
};


// Status
// online - Çevrimiçi
// idle - Boşta
// dnd - Rahatsız Etmeyin

// Type
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Name
// "Safe Code ❤ Salvatore" Yazan Kısıma İstediğiniz Oynuyor Durumunu Yazabilirsiniz 
