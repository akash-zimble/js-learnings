function memoizedFibonacciSeries(){
    const cache = {};

    return function fib(n) {
        if(n in cache){
            return cache[n];
        }

        if(n<=1){
            return n;
        }

        cache[n] = fib(n-1)+fib(n-2);
        return cache[n];
    }
}

const fibonacci = memoizedFibonacciSeries();

console.log(fibonacci(70));
console.log(fibonacci(50));

/**
 * Memoization is a technique where you cache the result of a function call based on its inputs. 
 * If the function is called again with the same inputs, the cached result is returned immediately instead of recalculating.
 * 
 * in above fib method if we calculate fib(70) then when we call fib(50) it will directly return value from cache, instead of calculating it again.
 * 
 * As memoizedFibonacciSeries() returns closure with cache, it wont be reinitialized when we call fibonacci multiple times
 * 
 */