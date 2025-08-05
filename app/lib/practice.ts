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

export const countChar = (str: string, char: string): number => {
  return str.split("").filter((c) => {
    c === char;
  }).length;
};

export const countChar2 = (str: string, char: string): number => {
  let count = 0;
  for (const c of str) {
    if (c === char) count++;
  }
  return count;
};

export const filterPositiveNumbers = (arr: number[]): number[] => {
  return arr.filter((p) => p > 0);
};

export const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((p) => p % 2 === 0);
};

export const filterOddNumbers = (arr: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) result.push(arr[i]);
  }
  return result;
};

export const filterOddNumbers2 = (arr: number[]): number[] => {
  const result: number[] = [];
  for (const num of arr) {
    if (num % 2 === 1) {
      result.push(num);
    }
  }
  return result;
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + str.slice(1))
    .join(" ");
};

export const mostFrequentChar = (str: string): string | null => {
  if (str.length === 0) return null;

  const count: Record<string, number> = {};
  for (const char of str) {
    count[char] = (count[char] ?? 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (const char in count) {
    if (count[char] > maxCount) {
      maxChar = char;
      maxCount = count[char];
    }
  }
  return maxChar;
};

export const removeDuplicates = (arr: number[]) => {
  if (arr.length === 0) return;

  const set = new Set(arr);
  const setNums = Array.from(set);
  return setNums;
};
