let word = "or coding logic";
removeDublicate(word);
function removeDublicate(val){
    let seen = {}
    let result = "";
    for(char of val){
        if(!seen[char]){
             result+=char;
             seen[char] = true;
        }
    }
    console.log(result);
}