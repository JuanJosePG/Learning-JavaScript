function destroyer(arr) {
  let args=arr.slice.call(arguments);
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<args.length;j++){
      if(arr[i]===args[j]){
        delete arr[i];
      }
    }
  }
  //filter(Boolean) search all null values due to delete function
  return arr.filter(Boolean)
}
