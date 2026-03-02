export function containsOnlyPositiveNumbers(
  a: number,
  b: number,
  c: number,
): boolean {
  const triangleSides = [a, b, c];
  for (const side of triangleSides) {
    if (side <= 0) {
      return false;
    }
  }
  return true;
}

export function isTriangleValid(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

export function isEquilateral(a: number, b: number, c: number): boolean {
  return a == b && a == c && b == c;
}

export function isIsosceles(a: number, b: number, c: number): boolean {
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
export function isScalene(a: number, b: number, c: number): boolean {
  return a != b && a != c && b != c;
}
