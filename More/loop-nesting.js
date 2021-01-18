const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}
 
for(var i=0;i<game["suspects"].length;i++){
  console.log(game["suspects"][i]) /*{ name: 'Rusty', color: 'orange' }
                                    { name: 'Miss Scarlet', color: 'red' }  */
  console.log(game["suspects"][i].name); /*'Rusty'
                                          'Miss Scarlet'*/
  console.log(game["suspects"][i]["color"]) /*'orange'
                                              'red'*/
}
