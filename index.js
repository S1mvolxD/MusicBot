const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");

const client = new AoiClient({
  token: "XXX-XXX-XXX-XXX-XXX-XXX",
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  },
});

//Variables:
require("./handler/variables.js")(client);
require("./handler/status.js")(client);

//Music:
const voice = new AoiVoice(client, {
    requestOptions: {
    	offsetTimeout: 0,
    	soundcloudLikeTrackLimit: 0,
   	 	spotifyPlaylistLimit: 0,
    	youtubePlaylistLimit: 0,
    },
    searchOptions: {
        youtubeClient: "YTMUSIC",
        youtubegl: "US",
    }
});
//Loader:
const loader = new LoadCommands(client);
loader.setColors(loader.themes.default);
loader.load(client.cmd, "./commands/")
loader.load(voice.cmds, "./voice/");

//Events Music
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.QueueStart);
voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.AudioError);
voice.addEvent(PlayerEvents.TrackPause);
voice.addEvent(PlayerEvents.TrackResume);

 voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
 voice.addPlugin(
  PluginName.Filter,
   new Filter({
     filterFromStart: false,
  }),
 );

voice.bindExecutor(client.functionManager.interpreter);
