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
// function freq(str){
//   let obj = {};
//   for(let ch of str){
//     obj[ch] = (obj[ch] || 0) + 1;
//   }
//   return obj;
// }



// function deepClone(obj){

//   if(obj === null || typeof obj !== "object"){
//     return obj;
//   }

//   if(Array.isArray(obj)){
//     let copy = [];
//     for(let i=0;i<obj.length;i++){
//       copy[i] = deepClone(obj[i]);
//     }
//     return copy;
//   }

//   let copy = {};
//   for(let key in obj){
//     copy[key] = deepClone(obj[key]);
//   }

//   return copy;
// }

// const user = {
//   name: "Prince",
//   skills: ["JS","React"],
//   address: {
//     city: "Indore"
//   }
// };

// const newUser = deepClone(user);

// newUser.address.city = "Delhi";

// console.log(user.address.city); // Indore
// console.log(newUser.address.city); // Delhi

function memo(fn){
  let cache = {};
  return function(n){
    if(cache[n]) return cache[n];
    cache[n] = fn(n);
    return cache[n];
  }
}
