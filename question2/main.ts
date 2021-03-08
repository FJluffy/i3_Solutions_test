export function findOutlier(integers: number[]): number {
  const len: number = integers.length;
  if (len < 3) {
    return -1;
  }

  //if first number is outlier
  else if ((integers[0] + integers[1]) % 2 === 1 && (integers[0] + integers[2]) % 2 === 1) {
    return integers[0];
  }

  //if last number is outlier
  else if ((integers[len - 1] + integers[len - 2]) % 2 === 1 && (integers[len - 1] + integers[len - 3]) % 2 === 1) {
    return integers[len - 1];
  }

  else {
    for (let i = 1; i < len - 1; i++) {
      if ((integers[i] + integers[i - 1]) % 2 === 1 && (integers[i] + integers[i + 1]) % 2 === 1) {
        return integers[i];
      }
    }
  }
  return -1;
}