const _={};

_.filter=function(arr,callback){
  const storage =[];
  
  for(var i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)){
      storage.push(arr[i]);
    }
  }
  
  return storage;
}
