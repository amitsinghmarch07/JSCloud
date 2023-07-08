function isPrime(value){ //*indempotent
    var max = Math.sqrt(value);
    for (let div = 2; div <= max; div++){

    if(value % div == 0)
        return false;
    }
    return true;
}
function memoize(target ) { //%target => isPrime
var cache = {};// closure variable
function inner(value){ //% we will return replacement

    if(!cache[value])
    cache[value] = target(value);
    return cache[value];
    }

return inner
}
var cachedPrime = memoize(isPrime);

console.log(cachedPrime(999_999_000_001));
console.log(cachedPrime(999_999_000_001));