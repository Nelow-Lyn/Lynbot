const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.includes("uwu")) {
    message.delete(1000);
    // message.channel.send("NO UWU!!!!");
    //setTimeout(() => {message.delete(1000); }, 5000);
    setTimeout(() => {message.channel.send("NO UWU!!!!"); }, 5000);
  }
});

client.login("NzkyMDc2MTU1NzE2ODk0NzMw.X-YcZw.GscWeBD31IcAcicVfp4wrXPvcOU");