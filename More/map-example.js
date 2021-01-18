const weapons=["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item){
  return `broken ${item}`;
}

var new_array=weapons.map(makeBroken);

new_array //[ 'broken candlestick', 'broken lead pipe', 'broken revolver' ]


// Underscore
const _ = {};

_.map = function(list, callback){
  var storage=[];
  
  for(var i=0;i<list.length;i++){
    storage.push(callback(list[i],i,list));
  }
  
  return storage;
}
