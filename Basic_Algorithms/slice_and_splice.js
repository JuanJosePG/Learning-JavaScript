function frankenSplice(arr1, arr2, n) {
  let arr_new = arr2.slice();
  arr_new.splice(n, 0, ...arr1);
  return arr_new;
}
