//Example1
var obj={
  "name": "Rusty",
  "room": "kitchen",
  "weapon": "candlestick"
}
console.log(obj) //{ name: 'Rusty', room: 'kitchen', weapon: 'candlestick' }
const {room, weapon} = obj
console.log(room) //'kitchen'
console.log(weapon) //'candlestick'

//Example2
var [a, ,b]=[1,2,3];
console.log(a) //1
console.log(b) //3

//Example3
var [a,...b]=[1,2,3,4]
console.log(a) //1
console.log(b) //[2,3,4]
console.log(...b) //2 3 4

//Example4
var a=1, b=2;
[b,a]=[a,b]
console.log(a) //2
console.log(b) //1

//Example5
var [a,[b,[c,d]]]=[1,[2,[[[3,4],5],6]]]
console.log("a:",a,"b:",b,"c:",c,"d:",d); //'a:' 1 'b:' 2 'c:' [ [ 3, 4 ], 5 ] 'd:' 6
