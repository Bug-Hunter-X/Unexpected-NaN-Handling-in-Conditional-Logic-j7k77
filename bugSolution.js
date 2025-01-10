function foo(x) {
  if (isNaN(x)) {
    return -2; // Handle NaN explicitly
  } else if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else {
    return x + 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1)); // Output: -1
console.log(foo(5)); // Output: 6
console.log(foo(NaN)); // Output: -2