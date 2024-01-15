export function ToArrayOfKeys<T>(value: T): string[] {
  let keys = [];
  for (const key in value) {
    keys.push(key);
  }
  return keys;
}
