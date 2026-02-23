import * as readline from "readline";

export default function getUserInput(
  rl: readline.Interface,
  callback: (a: number, b: number, c: number) => void,
) {
  rl.question("\nDigite o primeiro número: ", (first) => {
    rl.question("Digite o segundo número: ", (second) => {
      rl.question("Digite o terceiro número: ", (third) => {
        const a = Number(first);
        const b = Number(second);
        const c = Number(third);

        callback(a, b, c);
      });
    });
  });
}
