const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const _={}

_.each = function(list, callback){
  if(Array.isArray(list)){
    for(var i=0;i<list.length;i++){
      callback(list[i], i, list);
    }
  } else {
    for(var key in list){
      callback(list[key], key, list);
    }
  }
}

_.filter=function(arr,callback){
  const storage =[];
  
  for(var i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)===true){
      storage.push(arr[i]);
    }
  }
  
  return storage;
}

_.map = function(list, callback){
  var storage=[];
  
  for(var i=0;i<list.length;i++){
    storage.push(callback(list[i],i,list));
  }
  
  return storage;
}

var suspects = _.filter(videoData, function(suspectObject){
  return suspectObject.present;
});

var suspectsName = _.map(suspects, suspect => {
  return suspect.name;
});

suspectsName; /*[
              'Miss Scarlet',
              'Reverend Green',
              'Colonel Mustard',
              'Professor Plum'
              ]*/