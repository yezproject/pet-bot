const { SlashCommandBuilder } = require("@discordjs/builders");
// const tokenDb = require('../../data/tokenDb');
// const transactionService = require('../../services/transaction-service');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("latest")
    .setDescription("Get latest transaction"),

  async execute(interaction) {
    console.log("interaction", interaction);
    // const token = await tokenDb.get(interaction.user.id);
    await interaction.reply({
      content: `
        Get latest transaction:
        `,
      ephemeral: true,
    });

  },
};
