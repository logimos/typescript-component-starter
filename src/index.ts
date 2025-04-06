export * from './utils'; // Re-export utility functions

/**
 * A simple setup function for demonstration.
 * @param element - The button element to attach the counter to.
 */
export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}