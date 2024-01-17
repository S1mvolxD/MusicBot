module.exports = [
  {
    name: "play",
    aliases: "p",
    $if: "old",
    code: `

$if[$checkContains[$message;https://www.youtube.com/]==true]

    $setGuildVar[authorbutton;$authorID]
    $author[Added a track;https://cdn3.emoji.gg/emojis/4229-youtube.png]

    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]
    $addTimestamp

    $playTrack[$nonescape[$message];youtube]
	$if[$voiceID[$clientID]==]
	$joinVc[$voiceID;false;true;true]
	$endif
  $endif

  $if[$checkContains[$message;https://open.spotify.com/;https://open.spotify.com/playlist/]==true]

    $setGuildVar[authorbutton;$authorID]
    $author[Added a track;https://cdn3.emoji.gg/emojis/2320-spotify.png]

    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]
    $addTimestamp

    $playTrack[$nonescape[$message];spotify]
   	$if[$voiceID[$clientID]==]
	$joinVc[$voiceID;false;true;true]
	$endif
  $endif

  $if[$isValidLink[$message]==false]

      $setGuildVar[authorbutton;$authorID]
      $author[Added a track;https://cdn3.emoji.gg/emojis/4229-youtube.png]

      $color[$getGuildVar[color]]
      $footer[Used the command ~ $username;$authorAvatar]
      $addTimestamp

      $playTrack[$nonescape[$message];youtube]
      	$if[$voiceID[$clientID]==]
	$joinVc[$voiceID;false;true;true]
	$endif

  $endif

$onlyIf[$message!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:>  **$username** Specify a valid song}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]

$onlyIf[$voiceID!=;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**$username** You're not in a voice channel.}{color:Red}{footer:Error ~ $username:$authorAvatar}}]


$onlyClientPerms[speak;{newEmbed:{author:Error Permissions:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**I'm are missing the \`speak\` permission**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$onlyClientPerms[connect;{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:**I'm are missing the \`connect\` permission**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]

$suppressErrors[{newEmbed:{author:Error:https://cdn3.emoji.gg/emojis/8916-crossmark.png}{description:>  If you have this problem, please inform the bot developer.}{color:FF0000}{footer:Error ~ $username:$authorAvatar}}]
`,
  },
];
