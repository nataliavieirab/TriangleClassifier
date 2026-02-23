import * as readline from "readline";
import classifyTriangle from "./classify-triangle";
import getUserInput from "./cli";

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\nClassificador de Triângulos!");

  function run() {
    getUserInput(rl, (a, b, c) => {
      const result = classifyTriangle(a, b, c);
      console.log(result);

      rl.question(
        "\nDeseja verificar um novo triângulo? [s/n] --> ",
        (answer) => {
          if (answer.toLowerCase() === "s") {
            run();
          } else {
            rl.close();
          }
        },
      );
    });
  }

  run();
}

main();
