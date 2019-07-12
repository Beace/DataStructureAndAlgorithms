/**
 * twoDimensional
 * @param items
 * @param prepend 
 */
const twoDimensional = <T>(
  items: Array<Array<T>>,
  prepend: Array<T> = []
): Array<Array<T>> => {
  if (!items || items.length === 0) return [prepend];

  let out: any[] | never[] | T[][] = [];

  for (let i = 0; i < items[0].length; i++) {
    out = [
      ...out,
      ...twoDimensional(items.slice(1), [...prepend, items[0][i]])
    ];
  }

  return out;
};

export default twoDimensional;
