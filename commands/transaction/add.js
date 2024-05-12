const { SlashCommandBuilder } = require("@discordjs/builders");
const tokenDb = require("../../data/tokenDb");

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
    const description = interaction.options.getString("description").trim();
    const token = await tokenDb.get(interaction.user.id);
    const req = {
      token,
      amount: number,
      description,
      createTime: Date.now(),
    };
    console.log("request is: ", req);
    await interaction.reply({
      content: `
        Your request:
        '''
        ${JSON.stringify(req)}
        '''
        `,
      ephemeral: true,
    });
  },
};
