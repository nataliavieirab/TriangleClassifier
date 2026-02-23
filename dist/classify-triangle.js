"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = classifyTriangle;
const utils_1 = require("./utils");
function classifyTriangle(a, b, c) {
    if ((0, utils_1.hasNegativeNumbers)(a, b, c)) {
        if ((0, utils_1.isTriangleValid)(a, b, c)) {
            if ((0, utils_1.isEquilateral)(a, b, c)) {
                return "\nTriângulo Equilátero!";
            }
            else if ((0, utils_1.isIsosceles)(a, b, c)) {
                return "\nTriângulo Isósceles!";
            }
            else if ((0, utils_1.isScalene)(a, b, c)) {
                return "\nTriângulo Escaleno!";
            }
        }
        else {
            return "\nOs valores informados não seguem a condição de existência de um triângulo.";
        }
    }
    else {
        return "\nFoi informado pelo menos um valor negativo. Informe somente valores positivos!";
    }
}
//# sourceMappingURL=classify-triangle.js.map