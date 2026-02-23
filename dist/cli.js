"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getUserInput;
function getUserInput(rl, callback) {
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
//# sourceMappingURL=cli.js.map