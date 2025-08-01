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
