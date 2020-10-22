function binaryAgent(str) {
  let bit_string=str.split(" ");
  let result=[];
  for(let i=0;i<bit_string.length;i++){
    result.push(String.fromCharCode(parseInt(bit_string[i],2)))
  }
  return result.join("");
}
