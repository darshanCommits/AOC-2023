export const combinedRegex = new RegExp(`${numPattern}|${numPattern}(?!.*\\1)`, 'g');
