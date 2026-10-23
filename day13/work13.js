const cart = ["우유", "빵"];
const a = cart.push ("계란");
const b = cart[cart.length -1];
const c = cart.shift();
cart.unshift("버터");
const d = cart.splice(1,1);
const e = cart.slice(0,1);
console.log(e);





const oz = {"name" : "김오즈",};
const json = JSON.stringify(oz);
console.log(json);
console.log(typeof json);
const back = JSON.parse(json);
console.log(back.name);

