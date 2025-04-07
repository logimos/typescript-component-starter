import { describe, it, expect } from 'vitest';
import { someFunction } from '../src/utils'; // Import directly from source for tests

describe('someFunction', () => {
  it('should greet the provided name', () => {
    expect(someFunction('Vitest')).toBe('Hello, Vitest!');
  });

  it('should provide a default greeting if no name is given', () => {
    expect(someFunction('')).toBe('Hello there!');
  });

  it('should handle null input gracefully', () => {
    // Option 1: Use type assertion with unknown (safer than any)
    expect(someFunction(null as unknown as string)).toBe('Hello there!');
    // Option 2: Update the function signature to accept null/undefined
    // This would require changing the implementation to: function someFunction(name: string | null | undefined): string
  });
});

// Add tests for setupCounter if it were more complex or testable without DOM
// describe('setupCounter', () => {
//   // Testing DOM manipulation often requires jsdom environment and more setup
//   it('should initialize the counter', () => {
//     // Mocking DOM elements or using testing-library might be needed here
//   });
// });
