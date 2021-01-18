function CreateSuspectObjects(name){
  return {
    name: name,
    color: name.split(" ")[1],
    speak: function(){
      console.log("my name is ", name);
    }
  };
};

var suspects = ["Mis Scarlet", "Colonel Mustard", "Mr. White", "Mr Blue"];
var suspectsList = [];

suspects.forEach(function(name){
  suspectsList.push(CreateSuspectObjects(name));
});

console.log(suspectsList)
