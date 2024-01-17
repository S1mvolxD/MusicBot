module.exports = [
  {
    name: "leave",
    aliases: ["disconnect", "dc"],
    $if: "old",
    code: `

  $leaveVC

  $author[Disconnect;https://cdn3.emoji.gg/emojis/7057-checkmark.png]
  $description[The bot has left the voice channel]

  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp

$onlyIf[$voiceID!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You're not in a voice channel.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$suppressErrors[{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:If you have this problem, please inform the bot developer.}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]
`,
  },
];
