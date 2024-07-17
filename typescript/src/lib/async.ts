/**
 * A sample function that returns a promise that completes after the specified
 * number of milliseconds have passed.
 * ### Example (es imports)
 * ```js
 * import { wait } from '@lib/async';
 *
 * (async function (): Promise<void> {
 *   console.log('Waiting 500 milliseconds');
 *   await wait(500);
 *   console.log('Beep');
 * })();
 *
 * ```
 * @param ms Number of milliseconds to wait
 * @returns Promise<void>
 */

export const wait = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

/**
 * A sample async function (to demo Typescript's es7 async/await down-leveling).
 *
 * ### Example (es imports)
 * ```js
 * import { asyncABC } from 'typescript-starter'
 * console.log(await asyncABC())
 * // => ['a','b','c']
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var double = require('typescript-starter').asyncABC;
 * asyncABC().then(console.log);
 * // => ['a','b','c']
 * ```
 *
 * @returns a Promise which should contain `['a','b','c']`
 */
export const asyncABC = async () => {
  const somethingSlow = (index: 0 | 1 | 2) => {
    const storage = "abc".charAt(index);
    return new Promise<string>((resolve) =>
      // later...
      resolve(storage),
    );
  };
  const a = await somethingSlow(0);
  const b = await somethingSlow(1);
  const c = await somethingSlow(2);
  return [a, b, c];
};
