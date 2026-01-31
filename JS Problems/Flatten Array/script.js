function flatten(arr) {
  let out = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      out.push(...flatten(el));
    } else {
      out.push(el);
    }
  }
  return out;
}
console.log(flatten([1,[2,[3,4]],5]));
