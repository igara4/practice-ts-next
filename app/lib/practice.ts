export function ensurePrefix(prefix: string, str: string) {
  if (!str.startsWith(prefix)) {
    return str + prefix;
  }
  return str;
}

export const ensurePrefix2 = (prefix: string, str: string): string => {
  return str.startsWith(prefix) ? str : str + prefix;
};

export function slash(str: string) {
  return str.replace(/\\/g, "/");
}

export const slash2 = (str: string) => {
  return str.replace(/\\/g, "/");
};

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const capitalize2 = (str: string) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export type Nullable<T> = T | null | undefined;

export type Arrayable<T> = T | Array<T>;

export function toArray<T>(array?: Nullable<Arrayable<T>>) {
  array = array ?? [];
  return Array.isArray(array) ? array : [array];
}

export function flattenArrayable<T>(
  array?: Nullable<Arrayable<T | Array<T>>>
): Array<T> {
  return toArray(array).flat(1) as Array<T>;
}

export function maxInArray(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  } else {
    return Math.max(...arr);
  }
}

export const filterEvenNumber = (arr: number[]): number[] => {
  return arr.filter((n) => n % 2 === 0);
};

export const isPalindrome = (str: string): boolean => {
  return str === str.split("").reverse().join("");
};

export const sumArray = (arr: number[]): number => {
  return arr.reduce((sum, element) => {
    return sum + element;
  }, 0);
};
