const cleanSet = (set, startString) => {
  const contained = [];

  if (startString.length === 0) return '';

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      contained.push(item.slice(startString.length));
    }
  }
  return contained.join('-');
};

export default cleanSet;
