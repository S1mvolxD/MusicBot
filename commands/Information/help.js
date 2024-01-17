module.exports = [{
  name: "help",
  code: `
  $author[List of commands;$userAvatar[$clientID]]

  $addField[Settings;\`prefix\`;false]
  $addField[Music;\`play\`, \`skip\`, \`stop\`, \`leave\`, \`join\`, \`volume\`;false]
  $addField[Information;\`stats\`, \`help\`, \`ping\`;false]

  $color[$getGuildVar[color]]
  $footer[Used the command ~ $username;$authorAvatar]
  $addTimestamp
  `
}]  
