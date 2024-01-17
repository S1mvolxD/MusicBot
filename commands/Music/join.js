module.exports = [
  {
    name: "join",
    aliases: "j",
    $if: "old",
    code: `


$joinVC

  $author[Joined;https://cdn3.emoji.gg/emojis/7057-checkmark.png]
  $description[Joined Voice Channel to the <#$voiceID>]

  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp

$onlyIf[$voiceID!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You're not in a voice channel.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyClientPerms[speak;{newEmbed:{author:Error Permissions:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**I'm are missing the \`speak\` permission**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyClientPerms[connect;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**I'm are missing the \`connect\` permission**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$suppressErrors[{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:>  If you have this problem, please inform the bot developer.}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]

`,
  },
];
