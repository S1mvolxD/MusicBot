module.exports = {
  name: "volume",
  aliases: ["v", "vol"],
  $if: "old",
  code: `

 $volume[$noMentionMessage[1]]
  
  $author[Volume set;https://cdn3.emoji.gg/emojis/7057-checkmark.png]
  $description[The volume has been changed to $message[1]] 
  
  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp

$onlyIf[$noMentionMessage[1]<=100;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You can minimum set the volume to **100%**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
$onlyIf[$noMentionMessage[1]>=10;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You can minimum set the volume to **10%**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyIf[$isNumber[$noMentionMessage[1]]!=false;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You provided an **invalid** number}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyIf[$noMentionMessage[1]!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You provided an **invalid** number}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyIf[$voiceID!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You're not in a voice channel.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$suppressErrors[{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:If you have this problem, please inform the bot developer.}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]
`
};
