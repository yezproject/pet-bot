const { SlashCommandBuilder } = require("@discordjs/builders");
const tokenDb = require("../../repository/token-repository");
const transactionService = require("../../service/transaction-service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Add transaction")
    .addNumberOption((option) =>
      option
        .setName("number")
        .setDescription("Amount transaction")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Transaction description")
        .setRequired(true)
    ),

  async execute(interaction) {
    const number = interaction.options.getNumber("number");
    const name = interaction.options.getString("description").trim();
    const token = await tokenDb.get(interaction.user.id);
    const req = {
      amount: number,
      name,
      transactionDate: Date.now(),
    };
    transactionService.add(req, token)
    interaction.reply({
      content: `
        Add transaction success:
        '''
        ${JSON.stringify(req)}
        '''
        `,
      ephemeral: true,
    });

  },
};
