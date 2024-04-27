const command = require("commander");
const inquirer = require("inquirer");

const program = new Command();
program.version("1.0.0");

program
  .command("repo")
  .description("repository ")
  .action(async () => {
    const names = await inquirer.createPromptModule({
      type: "input",
      name: "names",
      message: "Enter GitHub",
    });

    const apiUrl = `https://api.github.com/users/${names}/repos`;
  });
