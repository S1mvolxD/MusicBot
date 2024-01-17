module.exports = [
  {
    name: "eval",
    code: `
  $eval[$message]
  $deleteCommand
  $onlyForIDs[$clientOwnerIDs;]
  `,
  },
];
