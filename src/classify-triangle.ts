import {
  containsOnlyPositiveNumbers,
  isEquilateral,
  isIsosceles,
  isScalene,
  isTriangleValid,
} from "./utils";

export default function classifyTriangle(a: number, b: number, c: number) {
  if (containsOnlyPositiveNumbers(a, b, c)) {
    if (isTriangleValid(a, b, c)) {
      if (isEquilateral(a, b, c)) {
        return "\nTriângulo Equilátero!";
      } else if (isIsosceles(a, b, c)) {
        return "\nTriângulo Isósceles!";
      } else if (isScalene(a, b, c)) {
        return "\nTriângulo Escaleno!";
      }
    } else {
      return "\nOs valores informados não seguem a condição de existência de um triângulo.";
    }
  } else {
    return "\nFoi informado pelo menos um valor negativo. Informe somente valores positivos!";
  }
}
