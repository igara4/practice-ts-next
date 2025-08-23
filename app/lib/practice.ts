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

export const fizzbuzz = (n: number): string[] => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

export const average = (arr: number[]) => {
  if (arr.length === 0) return null;
  return arr.reduce((sum, element) => sum + element) / arr.length;
};

export const separateEvenOdd = (arr: number[]) => {
  const obj: { even: number[]; odd: number[] } = { even: [], odd: [] };
  if (arr.length === 0) return obj;

  for (const num of arr) {
    if (num % 2 === 0) {
      obj.even.push(num);
    } else {
      obj.odd.push(num);
    }
  }
  return obj;
};

export const sortString = (str: string): string => {
  const arr: string[] = [];
  for (const s of str) {
    arr.push(s);
  }
  return arr.sort().join("");
};

export const reverseSort = (str: string): string => {
  return str.split("").sort().reverse().join("");
};

export const slash3 = (str: string) => {
  return str.replace(/\\/g, "/");
};

export const ensurePrefix3 = (prefix: string, str: string) => {
  if (!str.startsWith(prefix)) {
    return prefix + str;
  }
  return str;
};

export const ensureSuffix3 = (suffix: string, str: string) => {
  if (!str.endsWith(suffix)) {
    return str + suffix;
  }
  return;
};

export const capitalize3 = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

export function toArray3<T>(arr?: Nullable<Arrayable<T>>) {
  arr = arr === null || arr === undefined ? [] : arr;
  return Array.isArray(arr) ? arr : [arr];
}

export function flattenArrayable3<T>(arr?: Nullable<Arrayable<T>>) {}

export const countDigits = (n: number) => {
  return String(n).length;
};

export const sumArray2 = (arr: number[]): number => {
  return arr.reduce((sum, element) => sum + element, 0);
};

export const maxInArray2 = (arr: number[]): number | null => {
  if (arr.length === 0) return null;
  return Math.max(...arr);
};

export const maxInArray3 = (arr: number[]): number | null => {
  if (arr.length === 0) return null;
  let maxNumber = arr[0];
  for (const n of arr) {
    if (maxNumber < n) {
      maxNumber = n;
    }
  }
  return maxNumber;
};

export const minInArray = (arr: number[]): number | null => {
  if (arr.length === 0) return null;
  return Math.min(...arr);
};

export const minInArray2 = (arr: number[]): number | null => {
  if (arr.length === 0) return null;
  let minNumber = arr[0];
  for (const n of arr) {
    if (n < minNumber) {
      minNumber = n;
    }
  }
  return minNumber;
};

export const countOccurrences = (arr: number[], target: number) => {
  if (arr.length === 0) return 0;

  let countNumber = 0;
  for (const n of arr) {
    if (n === target) {
      countNumber += 1;
    }
  }
  return countNumber;
};

export const countOccurrences2 = (arr: number[], target: number) => {
  arr.filter((n) => n === target).length;
};

export const countFrequencies = (arr: number[]) => {
  if (arr.length === 0) return {};
  const count: Record<number, number> = {};
  for (const n of arr) {
    count[n] = (count[n] ?? 0) + 1;
  }
  return count;
};

export const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

export const reverseString2 = (str: string) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

export const separateEvenOdd2 = (arr: number[]) => {
  const separate: { even: number[]; odd: number[] } = { even: [], odd: [] };
  for (const n of arr) {
    if (n % 2 === 0) {
      separate.even.push(n);
    } else {
      separate.odd.push(n);
    }
  }
  return separate;
};

export const sumAndAverage = (arr: number[]) => {
  const obj: { sum: number; average: number } = { sum: 0, average: 0 };
  if (arr.length === 0) return obj;
  obj.sum = arr.reduce((sum, element) => sum + element, 0);
  obj.average = obj.sum / arr.length;
  return obj;
};

export const findMaxMin = (arr: number[]) => {
  let obj: { max: number | null; min: number | null } = { max: 0, min: 0 };
  if (arr.length === 0) {
    return { max: null, min: null };
  }
  obj.max = Math.max(...arr);
  obj.min = Math.min(...arr);
  return obj;
};

export const findMaxMin2 = (arr: number[]) => {
  if (arr.length === 0) {
    return { max: null, min: null };
  }
  let obj: { max: number; min: number } = {
    max: arr[0],
    min: arr[0],
  };
  for (const n of arr) {
    if (n > obj.max) {
      obj.max = n;
    }
    if (n < obj.min) {
      obj.min = n;
    }
  }
  return obj;
};

export const countChar3 = (str: string, target: string) => {
  return str.split("").filter((s) => s === target).length;
};

export const countChar4 = (str: string, target: string) => {
  let count = 0;
  for (const s of str) {
    if (s === target) {
      count++;
    }
  }
  return count;
};

export const countVowels = (str: string) => {
  const vowels = ["a", "i", "u", "e", "o"];
  return str
    .toLowerCase()
    .split("")
    .filter((s) => vowels.includes(s)).length;
};

export const countVowels2 = (str: string) => {
  const vowels = ["a", "i", "u", "e", "o"];
  let count = 0;
  const arr = str.toLowerCase().split("");
  for (const s of arr) {
    for (const v of vowels) {
      if (s === v) {
        count++;
      }
    }
  }
  return count;
};

export const countVowels3 = (str: string) => {
  const vowels = ["a", "i", "u", "e", "o"];
  return str
    .toLowerCase()
    .split("")
    .filter((s) => {
      for (const v of vowels) {
        if (v === s) {
          return true;
        }
      }
      return false;
    }).length;
};

export const reverseArray = (arr: number[]) => {
  const a = [...arr];
  return a.reverse();
};

export const reverseArray2 = (arr: number[]) => {
  return arr.slice().reverse();
};

export const reverseArray3 = (arr: number[]) => {
  return [...arr].reverse();
};

export const reverseArray4 = (arr: number[]) => {
  let result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

export const secondLargest = (arr: number[]) => {
  if (arr.length < 2) return null;
  const max = Math.max(...arr);
  const newArray = arr.filter((n) => n !== max);
  if (newArray.length === 0) return null;
  return Math.max(...newArray);
};

export const secondLargest2 = (arr: number[]) => {
  if (arr.length < 2) return null;
  const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueArr[1] ?? null;
};

export const secondLargestLoop = (arr: number[]) => {
  if (arr.length < 2) return null;
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const n of arr) {
    if (n > firstMax) {
      secondMax = firstMax;
      firstMax = n;
    } else if (n < firstMax && n > secondMax) {
      secondMax = n;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
};

export const findMedian = (arr: number[]) => {
  if (arr.length === 0) return null;
  const newArray = [...arr].sort((a, b) => a - b);
  if (newArray.length % 2 === 1) {
    return newArray[Math.floor(newArray.length / 2)];
  } else {
    return (
      (newArray[newArray.length / 2 - 1] + newArray[newArray.length / 2]) / 2
    );
  }
};
