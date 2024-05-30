const { SlashCommandBuilder } = require("@discordjs/builders");
const tokenDb = require("../../repository/token-repository");
const transactionService = require("../../service/transaction-service");

module.exports = {
  data: new SlashCommandBuilder().setName("latest").setDescription("Get latest transaction"),

  async execute(interaction) {
    // console.log("interaction", interaction);
    const token = await tokenDb.get(interaction.user.id);
    const res = await transactionService.latest(token, 3);

    await interaction.reply({
      content: `\`\`\`json
      ${JSON.stringify(res.data, replacer, 2)}
      \`\`\``,
      ephemeral: true,
    });
  },
};

const replacer = (key, value) => {
  if (key === "currency") {
    return undefined;
  }
  if (key === "transactionDate") {
    return new Date(value).toLocaleString();
  }
  if (key === "categoryId" && value === null) {
    return undefined;
  }
  if (key === "amount") {
    return new Intl.NumberFormat().format(value);
  }
  return value;
};
