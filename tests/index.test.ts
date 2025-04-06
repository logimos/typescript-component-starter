import { describe, it, expect } from 'vitest';
import { someFunction } from '../src/utils'; // Import directly from source for tests

describe('someFunction', () => {
  it('should greet the provided name', () => {
    expect(someFunction('Vitest')).toBe('Hello, Vitest!');
  });

  it('should provide a default greeting if no name is given', () => {
    expect(someFunction('')).toBe('Hello there!');
  });

  it('should handle null input gracefully (based on implementation)', () => {
    // Depending on how you want to handle null/undefined, adjust test
    expect(someFunction(null as any)).toBe('Hello there!'); // Example if null becomes ''
    // expect(someFunction(null as any)).toBe('Hello, null!'); // If it treats null as string "null"
  });
});

// Add tests for setupCounter if it were more complex or testable without DOM
// describe('setupCounter', () => {
//   // Testing DOM manipulation often requires jsdom environment and more setup
//   it('should initialize the counter', () => {
//     // Mocking DOM elements or using testing-library might be needed here
//   });
// });
