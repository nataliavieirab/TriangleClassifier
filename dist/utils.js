"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsOnlyPositiveNumbers = containsOnlyPositiveNumbers;
exports.isTriangleValid = isTriangleValid;
exports.isEquilateral = isEquilateral;
exports.isIsosceles = isIsosceles;
exports.isScalene = isScalene;
function containsOnlyPositiveNumbers(a, b, c) {
    const triangleSides = [a, b, c];
    for (const side of triangleSides) {
        if (side <= 0) {
            return false;
        }
    }
    return true;
}
function isTriangleValid(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
function isEquilateral(a, b, c) {
    return a == b && a == c && b == c;
}
function isIsosceles(a, b, c) {
    const triangleSides = [a, b, c];
    for (let i = 0; i < triangleSides.length; i++) {
        for (let j = i + 1; j < triangleSides.length; j++) {
            if (triangleSides[i] === triangleSides[j]) {
                return true;
            }
        }
    }
    return false;
}
function isScalene(a, b, c) {
    return a != b && a != c && b != c;
}
//# sourceMappingURL=utils.js.map