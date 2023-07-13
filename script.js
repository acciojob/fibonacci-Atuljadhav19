function fibonacci(num) {
  if (n <= 0) {
    return 'Invalid input. Please enter a positive integer.';
  }
  
  if (n === 1 || n === 2) {
    return 1;
  }
  
  let prev = 1;
  let curr = 1;
  
  for (let i = 3; i <= n; i++) {
    let next = prev + curr;

	console.log(curr);
    prev = curr;
    curr = next;
  }
}


module.exports = fibonacci;
