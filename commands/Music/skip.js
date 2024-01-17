module.exports = {
  name: "skip",
  aliases: "s",
  $if: "old",
  code: `

  $skipTrack

  $author[Skipped;https://cdn3.emoji.gg/emojis/7057-checkmark.png]
  $description[Music is skipped]

  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp

$onlyIf[$queueLength!=0;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** There no song was playing.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyIf[$voiceID!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You're not in a voice channel.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$suppressErrors[{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:If you have this problem, please inform the bot developer.}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]
`,
};
