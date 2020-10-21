function smallestCommons(arr) {
  let min=Math.min(...arr)
  let max=Math.max(...arr)
  let result=max;
  for(let i=max-1;i>=min;i--){
    if(result%i){
      result+=max;
      i=max;
    }
  }
  return result;
}
