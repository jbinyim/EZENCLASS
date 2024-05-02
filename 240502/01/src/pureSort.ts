const pureSort = <T>(array: T[]): T[] => {
  const deepCopied = { ...array };
  return deepCopied.sort();
};
