function sumPrimes(num) {
  let result=0;
  for(let i=1;i<=num;i++){
    if(isPrime(i)){
      result+=i;
    }
  }
  return result;
}

function isPrime(num){
  for(let i=2;i<num;i++){
    if (num % i === 0) return false;
  }
  return num !== 1 && num !== 0;
}
