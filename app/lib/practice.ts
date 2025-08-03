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
