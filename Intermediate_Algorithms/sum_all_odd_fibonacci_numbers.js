function sumFibs(num) {
  let result=0;
  let current=1;
  let previous=0;

  while(current<=num){
    if(current%2!==0){
      result+=current;
    }
    current+=previous;
    previous=current-previous;
  }
  return result;
}
