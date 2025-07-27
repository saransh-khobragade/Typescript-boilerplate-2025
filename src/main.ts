// Simple TypeScript function

function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Run the function
// eslint-disable-next-line no-console
console.log(greet('World'));

// Export for potential use in other modules
export { greet };
