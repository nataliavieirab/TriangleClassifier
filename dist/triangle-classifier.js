"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = triangleClassifier;
const validations_1 = require("./validations");
function triangleClassifier(a, b, c) {
    if ((0, validations_1.hasNegativeNumbers)(a, b, c)) {
        if ((0, validations_1.isTriangleValid)(a, b, c)) {
            if ((0, validations_1.isEquilateral)(a, b, c)) {
                console.log("\nTriângulo Equilátero!");
            }
            else if ((0, validations_1.isIsosceles)(a, b, c)) {
                console.log("\nTriângulo Isosceles!");
            }
            else if ((0, validations_1.isScalene)(a, b, c)) {
                console.log("\nTriângulo Escaleno!");
            }
        }
        else {
            console.log("Os valores informados não seguem a condição de existência de um triângulo. ");
        }
    }
    else {
        console.log("Ops! Foi informado pelo menos um valor negativo. Informe somente valores positivos! ");
    }
}
//# sourceMappingURL=triangle-classifier.js.map