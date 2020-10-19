function diffArray(arr1, arr2) {
  let new_arr=arr1.concat(arr2);
  return new_arr.filter(obj=>!arr1.includes(obj) || !arr2.includes(obj));
}
