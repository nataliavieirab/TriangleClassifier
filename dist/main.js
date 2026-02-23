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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const validations_1 = require("./validations");
function Main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let shouldContinue = true;
    while (shouldContinue) {
        console.log("Classificador de Triângulos!");
        // Perguntar Lados do Triangulo
        rl.question("Digite o primeiro número: ", (firstNumber) => {
            rl.question("Digite o segundo número: ", (secondNumber) => {
                rl.question("Digite o terceiro número: ", (thirdNumber) => {
                    const a = Number(firstNumber);
                    const b = Number(secondNumber);
                    const c = Number(thirdNumber);
                    // Verificar Input do User
                    if ((0, validations_1.hasNegativeNumbers)(a, b, c)) {
                        // Verificar Existencia do Triangulo
                        if ((0, validations_1.isTriangleValid)(a, b, c)) {
                            // Classificar Triangulo
                            if ((0, validations_1.isEquilateral)(a, b, c)) {
                                console.log("Triângulo Equilátero!");
                            }
                            else if ((0, validations_1.isIsosceles)(a, b, c)) {
                                console.log("Triângulo Isosceles!");
                            }
                            else if ((0, validations_1.isScalene)(a, b, c)) {
                                console.log("Triângulo Escaleno!");
                            }
                        }
                        else {
                            console.log("Os valores informados não seguem a condição de existência de um triângulo. ");
                        }
                    }
                    else {
                        console.log("Os valores informados são negativos. Informe valores positivos.");
                    }
                    // Perguntar se deve continuar
                    rl.question("Deseja continuar? [s/n]", (answer) => {
                        if (answer === "s") {
                            shouldContinue = true;
                        }
                        else {
                            shouldContinue = false;
                            rl.close();
                        }
                    });
                });
            });
        });
    }
}
Main();
//# sourceMappingURL=main.js.map