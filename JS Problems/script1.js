// let word = "or coding logic";
// removeDublicate(word);
// function removeDublicate(val){
//     let seen = {}
//     let result = "";
//     for(char of val){
//         if(!seen[char]){
//              result+=char;
//              seen[char] = true;
//         }
//     }
//     console.log(result);
// }
function freq(str){
  let obj = {};
  for(let ch of str){
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
