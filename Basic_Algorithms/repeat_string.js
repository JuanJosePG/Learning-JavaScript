function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    let result="";
    for(let i=0;i<num;i++){
      result+=str;
    }
    return result;
  }
}
