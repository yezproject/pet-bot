const { REST, Routes } = require("discord.js");
const { clientId, token, guildId } = require("./config.json");

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    // The put method is used to fully refresh all commands in the guild with the current set
    rest
      .put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
      .then(() => console.log("Successfully deleted all guild commands."))
      .catch(console.error);

    rest
      .put(Routes.applicationCommands(clientId), { body: [] })
      .then(() => console.log("Successfully deleted all application commands."))
      .catch(console.error);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
