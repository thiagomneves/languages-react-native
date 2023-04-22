/**
 * High order function to map an object and return an object
 * @param object
 * @param mapFn
 * @returns object
 */
export function objectMap<T, U>(
  object: {[key: string]: T},
  mapFn: (arg: T) => U,
): {[key: string]: U} {
  return Object.keys(object).reduce(function (
    result: {[key: string]: U},
    key: string,
  ) {
    result[key] = mapFn(object[key]);
    return result;
  },
  {});
}
