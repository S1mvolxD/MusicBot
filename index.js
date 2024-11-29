const { AoiClient, LoadCommands } = require("aoi.js");

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


require("./handler/variables.js")(client);
require("./handler/status.js")(client);

//Музыка:
const { Manager } = require("@akarui/aoi.music");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

const voice = new AoiVoice(client, {
  searchOptions: {
    soundcloudClientId: "XXX-XXX-XXX-XXX-XXX-XXX", // optional
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

const loader = new LoadCommands(client);
loader.setColors(loader.themes.default);
loader.load(client.cmd, "./commands/")
loader.load(voice.cmds, "./voice/");

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
