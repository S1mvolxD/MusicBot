module.exports = [{
    name: "ping",
    $if: "old",
    code: `

$addField[1;Ping(s);\`\`\`fix
Ping: $pingms
Message: $messagePingms
$if[$voiceID[$clientID]==]
Voice Ping: $voicePing[ws]ms
$endif\`\`\`;true]

  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp`
}]
