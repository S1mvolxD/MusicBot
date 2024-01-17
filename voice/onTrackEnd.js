module.exports = {
  type: "trackEnd",
  channel: "$channelID",
  code: `
  $resetGuildVar[songTitle]
  $resetGuildVar[songID]
  $resetGuildVar[songDuration]
  $resetGuildVar[songThumbnail]

  $resetGuildVar[music_player]
  $resetGuildVar[music_channelID]

$deleteMessage[$getGuildVar[music_player];$getGuildVar[music_channelID]]
$onlyIf[$channelExists[$getGuildVar[music_channelID]]==true;]
$onlyIf[$messageExists[$getGuildVar[music_player]]==true;]

$author[$getGuildVar[songTitle];$get[thumbnail];https://www.youtube.com/watch?v=$getGuildVar[songID]]
$thumbnail[$getGuildVar[songThumbnail]]
$description[0:00/$replaceText[$digitalformat[$getGuildVar[songDuration]];00:0;;1]]

$footer[Использовал команду $username[$getGuildVar[authorbutton]];$userAvatar[$getGuildVar[authorbutton]]]
$color[$getVar[color]]
$addTimestamp

$let[thumbnail;https://cdn3.emoji.gg/emojis/3551-music.gif]
$suppressErrors
    `
}
