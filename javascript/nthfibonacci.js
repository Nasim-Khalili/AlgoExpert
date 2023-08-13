//function to find the nth number from fibonacci series
function fibonacci(n) {
    if (n < 2) {
       return n;
    } else {
       return fibonacci(n - 1) + fibonacci(n - 2);
    }
 }
 // Example usage
 console.log(fibonacci(6));
 console.log(fibonacci(10));