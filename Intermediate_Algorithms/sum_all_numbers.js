function sumAll(arr) {
  let result=0;
  let max=Math.max(arr[0],arr[1])
  let min=Math.min(arr[0],arr[1])
  for(let i=min;i<=max;i++){
    result+=i;
  }
  return result;
}
