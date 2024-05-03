const { SlashCommandBuilder } = require("@discordjs/builders");
const tokenStorage = require("../../data/tokenStorage");

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
    const token = tokenStorage.get(interaction.user.id);
    const req = {
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
