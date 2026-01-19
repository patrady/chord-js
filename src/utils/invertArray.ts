export function invertArray<T>(array: T[], index: number): T[] {
  const res = [];
  let i = 0;

  while (i < array.length) {
    res.push(array[(index + i) % array.length]);
    i++;
  }

  return res;
}
