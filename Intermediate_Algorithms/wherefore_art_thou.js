function whatIsInAName(collection, source) {
  let source_keys=Object.keys(source);

  return collection.filter(function(obj){
    for(let i=0;i<source_keys.length;i++){
      if(!obj.hasOwnProperty(source_keys[i])||(obj[source_keys[i]]!==source[source_keys[i]])){
        return false;
      }
    }
    return true;
  })
}
