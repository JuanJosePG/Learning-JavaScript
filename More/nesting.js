const game={};

game["suspects"]=[];

game.suspects.push({
  name:"Rusty",
  color: "orange"
})

game.suspects.push({
  name:"Miss Scarlet",
  color: "red"
})

game 
/*{
  suspects: [
    { name: 'Rusty', color: 'orange' },
    { name: 'Miss Scarlet', color: 'red' }
  ]
}*/

game.suspects
game["suspects"]
/*[
  { name: 'Rusty', color: 'orange' },
  { name: 'Miss Scarlet', color: 'red' }
]
*/

game[suspects] //ReferenceError: suspects is not defined -> that's because suspects is a string when we use [] notation
