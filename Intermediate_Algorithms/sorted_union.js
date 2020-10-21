function uniteUnique(arr) {
  let array_arg=[...arguments];
  let result=[];
  for(let i=0;i<array_arg.length;i++){
    for(let j=0;j<array_arg[i].length;j++){
      if(!result.includes(array_arg[i][j])){
        result.push(array_arg[i][j])
      }
    }
  }
  return result;
}
