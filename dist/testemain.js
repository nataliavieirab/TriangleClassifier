"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const triangle_classifier_1 = __importDefault(require("./triangle-classifier"));
function Main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log("Classificador de Triângulos!");
    function getUserInput() {
        rl.question("Digite o primeiro número: ", (firstNumber) => {
            rl.question("Digite o segundo número: ", (secondNumber) => {
                rl.question("Digite o terceiro número: ", (thirdNumber) => {
                    const a = Number(firstNumber);
                    const b = Number(secondNumber);
                    const c = Number(thirdNumber);
                    (0, triangle_classifier_1.default)(a, b, c);
                    rl.question("Deseja continuar? [s/n]", (answer) => {
                        if (answer.toLowerCase() === "s") {
                            getUserInput();
                        }
                        else {
                            rl.close();
                        }
                    });
                });
            });
        });
    }
    getUserInput();
}
Main();
//# sourceMappingURL=testemain.js.map