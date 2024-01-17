module.exports = [{
name: "<@$clientID>",
aliases: "<@&$clintID>",
nonPrefixed: true,
code: `
  $description[My prefix: \`$getGuildVar[prefix]\`]

  $color[$getGuildVar[color]]
  $footer[Mentioned me ~ $username;$authorAvatar]
  $addTimestamp

`
}]
