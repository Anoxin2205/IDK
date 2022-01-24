module.exports = {
  token: process.env.token || "OTIwMTM0NTI3NjA5ODcyNDA1.Ybf8Dg.WuNNA4e1YvrZ7khZvc842UqAzo0", //Bot's Token
  clientId: process.env.clientId || "920134527609872405", //ID of the bot
  clientSecret: process.env.clientSecret || "45GkAGmfktjZ_2GbSB73kEIzTvLMwy3J", //Client Secret of the bot
  port: 3000, //Port of the API and Dashboard
  scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  serverDeafen: true, //If you want bot to stay deafened
  defaultVolume: 50, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  supportServer: " ", //Support Server Link
  permissions: 826839002433, //Bot Inviting Permissions
  disconnectTime: 30000, //How long should the bot wait before disconnecting from the voice channel. in miliseconds. set to 1 for instant disconnect.
  alwaysplay: true, // when set to true music will always play no matter if theres no one in voice channel.
  // Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
  nodes: [
    {
      identifier: "Main",
      host: "lavalink.eu",
      port: 2333,
      password: "Raccoon",
      retryAmount: 5, //- Optional
      retryDelay: 1000, //- Optional
      secure: false
    },
  ],
  embedColor: "BLUE", //Color of the embeds, hex supported
  presence: {
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "idle", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: "Music", //Status Text
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
      },
    ],
  },
  iconURL:
    "https://github.com/SudhanPlayz/Discord-MusicBot/raw/master/assets/logo.gif", //This icon will be in every embed's author field
};
