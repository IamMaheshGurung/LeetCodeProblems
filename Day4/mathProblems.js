//Given a number n, find the first "n " element of the fibonacci sequence; also big O notation;

function fibonacci(n){
    const fib=[0, 1];
    for(let i=2; i<n; i++){
        fib[i]=fib[i-1] + fib[i-2];
    }
    console.log(fib); 
}
fibonacci(4);

//Given an integer 'n' find the factorial of that integer;
//In maths the factorial of non negetive integer n denoted n! is the product of all posv integer.

function factorial(n){
    let facto = 1;
    for(let i = 1; i<=n; i++){
        facto = facto * i;

    }
    console.log(facto)
}
factorial(4)
factorial(5)

//here Big O(n) time complexity

//Give a natural number "n", determine if the number is prime or not;
//A Prime number is the natural number gretaer than 1 that is not a product of two smaller number;

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i===0){
            return false;
        }
        
    }
    return true;
    
}
console.log(isPrime(1));
console.log(isPrime(12))
console.log(isPrime(4))

//Big(O)n

//power of Two

//Problem -"Give a positive integer n determine if the number is power of two or not."
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n % 2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}
console.log(isPowerOfTwo(7),
            isPowerOfTwo(8),
            isPowerOfTwo(24))
