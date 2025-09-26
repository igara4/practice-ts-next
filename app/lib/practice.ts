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
  const mid = Math.floor(newArray.length / 2);
  if (newArray.length % 2 === 1) {
    return newArray[mid];
  } else {
    return (newArray[mid - 1] + newArray[mid]) / 2;
  }
};

export const findMode = (arr: number[]) => {
  if (arr.length === 0) return null;
  const count: Record<number, number> = {};

  for (const n of arr) {
    count[n] = (count[n] ?? 0) + 1;
  }

  let mode: number | null = null;
  let maxCount = 0;

  for (const key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      mode = Number(key);
    }
  }
};

export const factorial = (n: number) => {
  if (n === 0) return 1;
  if (n < 0) return null;

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

export const factorial2 = (n: number) => {
  if (n === 0) return 1;
  if (n < 0) return null;

  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, cur) => acc * cur,
    1
  );
};

export const fibonacci = (n: number) => {
  if (n < 0) return -1;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

export const isPrime = (n: number) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const listPrimes = (n: number): number[] => {
  const list: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      list.push(i);
    }
  }
  return list;
};

export const isAnagram = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;
  return (
    s1.toLowerCase().split("").sort().join("") ===
    s2.toLowerCase().split("").sort().join("")
  );
};

export const isAnagram2 = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;
  const str1: Record<string, number> = {};
  const str2: Record<string, number> = {};
  for (const s of s1.toLowerCase()) {
    str1[s] = (str1[s] ?? 0) + 1;
  }
  for (const s of s2.toLowerCase()) {
    str2[s] = (str2[s] ?? 0) + 1;
  }

  for (const key in str1) {
    if (str1[key] !== str2[key]) {
      return false;
    }
  }
  return true;
};

export const isAnagram3 = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;

  const count: Record<string, number> = {};

  for (const char1 of s1.toLowerCase()) {
    count[char1] = (count[char1] ?? 0) + 1;
  }

  for (const char2 of s2.toLowerCase()) {
    if (!count[char2]) {
      return false;
    }
    count[char2]--;
  }
  return true;
};

export const sumAndProduct = (arr: number[]) => {
  const result: Record<string, number> = { sum: 0, product: 1 };
  result.sum = arr.reduce((sum, element) => sum + element, 0);
  result.product = arr.reduce((sum, element) => sum * element, 1);
  return result;
};

export const stats = (arr: number[]) => {
  const result: Record<string, null | number> = {
    max: null,
    min: null,
    average: null,
  };
  if (arr.length === 0) return result;
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);
  result.average = arr.reduce((sum, element) => sum + element, 0) / arr.length;
  return result;
};

export const stats2 = (arr: number[]) => {
  const result: Record<string, null | number> = {
    max: null,
    min: null,
    average: null,
    sum: null,
    median: null,
  };
  if (arr.length === 0) return result;
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);
  const sum = arr.reduce((sum, element) => sum + element, 0);
  result.sum = sum;
  result.average = sum / arr.length;
  const median = [...arr].sort((a, b) => a - b);
  if (median.length % 2 === 1) {
    result.median = median[Math.floor(median.length / 2)];
  } else {
    result.median =
      (median[median.length / 2 - 1] + median[median.length / 2]) / 2;
  }
  return result;
};

export const countWords = (str: string) => {
  if (str.length === 0) return 0;
  return str.split(" ").filter(Boolean).length;
};

export const countWords2 = (str: string) => {
  if (str.trim().length === 0) return 0;
  return str.trim().split(/\s+/).length;
};

export const reverseArray5 = (arr: number[]) => {
  return arr.toReversed();
};

export const countFrequencies2 = (arr: number[]) => {
  const count: Record<number, number> = {};
  if (arr.length === 0) return count;
  for (const n of arr) {
    count[n] = (count[n] ?? 0) + 1;
  }
  return count;
};

export const intersection = (arr1: number[], arr2: number[]) => {
  return [...new Set(arr1.filter((n) => arr2.includes(n)))];
};

export const uniqueArray = (arr: number[]) => {
  return [...new Set(arr)];
};

export const reverseWords = (str: string) => {
  return str.trim().split(/\s+/).reverse().join(" ");
};

export const reverseEachWord = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

export const hasUniqueChars = (str: string) => {
  return str.length === new Set(str).size;
};

export const firstDuplicateChar = (str: string) => {
  const seen = new Set<string>();
  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return null;
};

export const findMinMax = (arr: number[]) => {
  const result: Record<string, null | number> = { min: null, max: null };
  if (arr.length === 0) return result;
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);
  return result;
};

export const findMinMaxLoop = (arr: number[]) => {
  if (arr.length === 0) return { min: null, max: null };
  let max = arr[0];
  let min = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
    if (n < min) min = n;
  }
  return { max, min };
};

export const twoSum = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
};

export const reverseString3 = (str: string) => {
  return str.split("").reverse().join("");
};

export const reverseString4 = (str: string) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
