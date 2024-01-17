module.exports = [{
  channel: "$channelID",
  type: "trackStart",
  code: `
    $setGuildVar[songTitle;$songInfo[title]]
    $setGuildVar[songID;$songInfo[id]]
    $setGuildVar[songDuration;$songInfo[duration]]
    $setGuildVar[songThumbnail;$songInfo[thumbnail]]

    $setGuildVar[music_channelID;$channelID]
    $setGuildVar[music_player;$get[id]]
    $wait[1s]
    $let[id;$sendMessage[{newEmbed:{authorURL:https://www.youtube.com/watch?v=$songInfo[id]}{author:$songInfo[title]:$get[thumbnail]}{description:0:00/$replaceText[$digitalformat[$songInfo[duration]];00:0;;1]}{footer:Used the command ~ $username[$getGuildVar[authorbutton]]:$userAvatar[$getGuildVar[authorbutton]]}{timestamp}{thumbnail:$songInfo[thumbnail]}{color:$getVar[color]}};true]]

    $volume[$getVar[volume]]
    $setUserVar[play_pause;none;$authorID]
    $wait[1s]

    $let[thumbnail;https://cdn3.emoji.gg/emojis/3551-music.gif]
    $suppressErrors
    `
}]
