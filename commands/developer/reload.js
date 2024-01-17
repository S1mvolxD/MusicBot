module.exports = [{
  name: "reload",
  aliases: "up",
  code: `
  $updatecommands

  $author[Update Commands;$userAvatar[$clientID]]
  $description[<@$clientOwnerIDs>, Update \`$numberSeparator[$commandscount;,]\` commands]

  $color[$getGuildVar[color]]
  $onlyForIds[$clientOwnerIDs;]
  `
}]
