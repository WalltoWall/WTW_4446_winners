/**
 * Finds the first non-nullish value in an array starting from `idx` and
 * searching left.
 *
 * @param arr Array of values.
 * @param idx Starting search index.
 *
 * @returns First non-nullish value in the array with an index equal to or less
 * than `idx`. Returns `undefined` if no value can be found.
 */
export const firstLeft = <T>(arr: T[], idx: number) => {
  if (idx >= arr.length) idx = arr.length - 1

  while (idx > -1 && (arr[idx] === null || arr[idx] === undefined)) idx--

  return arr[idx]
}
/**
 * Converts `input` into an array unless it is already an array.
 *
 * @param input Data to cast into an array.
 *
 * @returns An array containing input.
 */
export const castArray = <T>(input: T | T[]) =>
  Array.isArray(input) ? input : [input]

/**
 * Combines two arrays into one using a function to determine each element in
 * the final array. The function receives an element of the same index from
 * each array.
 *
 * @param fn Function that receives an element from each array and returns a
 * value for the resulting array.
 * @param a Left array.
 * @param b Right array.
 *
 * @returns New array with values returned from `fn`.
 */
export const zipFirstLeftWith = <A, B, C>(
  fn: (a: A, b: B) => C,
  a: A[],
  b: B[],
): C[] => {
  const result = []
  const length = Math.max(a.length, b.length)

  for (let i = 0; i < length; i++)
    result[i] = fn(firstLeft(a, i), firstLeft(b, i))

  return result
}

/**
 * Determines if a URL is an anchor.
 *
 * @param url The URL to test.
 *
 * @returns `true` if the URL is an anchor, `false` otherwise.
 *
 * @example
 * isAnchor('https://#top') // true
 * isAnchor('https://example.com') // false
 */
export const isAnchor = (url: string) => /^https?:\/\/#/.test(url)

/**
 * Determines if a URL is internal. This is a naive check that does not take
 * into account the relative domain.
 *
 * @param url The URL to test.
 *
 * @returns `true` if the URL is internal, `false` otherwise.
 *
 * @example
 * isInternal('/child-page') // true
 * isInternal('https://example.com') // false
 */
export const isInternal = (url: string) => /^\/(?!\/)/.test(url)

/**
 * Strips the protocol off an HTTP or HTTPS URL.
 *
 * @param url The URL to strip.
 *
 * @returns `url` without HTTP or HTTPS protocol.
 *
 * @example
 * stripProtocol('https://example.com') // "example.com"
 */
export const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '')

/**
 * Creates a new array from the provided array without falsy values.
 *
 * @param input Array potentially with falsy values.
 *
 * @returns A new array equivalent to `input` without falsy values.
 */
export const compact = <T>(
  input: (T | null | undefined | false | '' | 0)[],
): T[] => {
  const result: T[] = []

  for (let i = 0; i < input.length; i++) input[i] && result.push(input[i] as T)

  return result
}

/**
 * Creates an array of elements split into groups of the provided size.
 *
 * @param size - Length of each chunk.
 * @param array - The array to split.
 *
 * @returns An array containing chunked arrays. If array cannot be split evenly, the final chunk will be the remaining elements.
 */
export const chunk = <T>(size: number, arr: T[]): T[][] =>
  arr.reduce(
    (array, item, i) =>
      i % size === 0
        ? [...array, [item]]
        : [...array.slice(0, -1), [...array.slice(-1)[0], item]],
    [] as T[][],
  )

export const getSearchQuery = () => {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(location.search)

  return params.get('query') ?? ''
}
