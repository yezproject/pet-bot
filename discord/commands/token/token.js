const { SlashCommandBuilder } = require("discord.js");
const tokenDb = require("../../../redis/token-repository.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("token")
    .setDescription("Add your personal PET's token")
    .addStringOption((option) =>
      option.setName("token").setDescription("Your token").setRequired(true),
    ),
  async execute(interaction) {
    const token = normalizeToken(interaction.options.getString("token"));
    const userId = interaction.user.id;
    tokenDb.set(userId, token);
    await interaction.reply({
      content: `Your personal token **${token}** is set!`,
      ephemeral: true,
    });
  },
};

function normalizeToken(token) {
  return token.replace(/ /g, "");
}
