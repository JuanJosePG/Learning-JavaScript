function truthCheck(collection, pre) {
  let counter=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      counter++;
    }
  }
  return counter==collection.length;
}
