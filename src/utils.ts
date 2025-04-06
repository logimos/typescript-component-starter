/**
 * Example utility function.
 * Greets the given name.
 * @param name - The name to greet.
 * @returns A greeting string.
 * @example
 * ```ts
 * import { someFunction } from './utils';
 * console.log(someFunction('World')); // Output: "Hello, World!"
 * ```
 */
export function someFunction(name: string): string {
  if (!name) {
    return 'Hello there!';
  }
  return `Hello, ${name}!`;
}
