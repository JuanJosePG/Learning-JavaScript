function translatePigLatin(str) {
  let testing_item=new RegExp(/^[aeiou]/,"gi");
  if(testing_item.test(str)){
    return str.concat("way")
  } else{
    if(str.match(/[aeiou]/)===null){
      return str.concat("ay")
    } else{
      let index=str.indexOf(str.match(/[aeiou]/))
      return str.substr(index)+str.substr(0,index)+"ay"
    }
  }
}
