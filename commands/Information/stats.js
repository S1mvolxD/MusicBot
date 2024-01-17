module.exports = [
  {
    name: "stats",
    aliases: ["bot", "bot-info", "info-bot"],
    $if: "old",
    code: `

$addField[1;Used;\`\`\`js
CPU: $cpu/25.00% 
RAM: $abbreviate[$truncate[$ram]]mb/$maxrammb
Memory: $djsEval[process.memoryUsage().rss / 1024 / 1024;true] MB
\`\`\`;true]

$addField[1;Other;\`\`\`fix
Server(s): $guildCount
Member(s): $allMembersCount\`\`\`;true]

$addField[1;Ping(s);\`\`\`fix
Api: $pingms
Message: $messagePingms
$if[$hasPlayer==true]
Voice Ping: $voicePing[ws]ms
$endif\`\`\`;true]

$color[$getGuildVar[color]]
$footer[$djsEval[Math.floor(client.uptime / 86400000);;true] Day(s), $djsEval[Math.floor(client.uptime / 3600000) % 24;;true] Hour(s), $djsEval[Math.floor(client.uptime / 60000) % 60;;true] Minute(s), $djsEval[Math.floor(client.uptime / 1000) % 60;;true] Second(s)]

$addButton[1;Invite;link;https://discord.com/api/oauth2/authorize?client_id=1177865308158034052&permissions=2146958847&scope=bot%20applications.commands;false]
$addButton[1;Support;link;https://discord.gg/NAmtzHAYrV;false]
$suppressErrors
`,
  },
];
