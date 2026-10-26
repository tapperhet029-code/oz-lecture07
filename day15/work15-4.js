const el = document.getElementById("badge"); //class = "tag"
el.classList.add("red"); //tag red (tag + red)
el.classList.remove("tag"); //red
const a = el.classList.contains("tag"); //false (tag를 삭제시켰기 때문)
const b = el.classList.toggle("big"); //big이 없으니 추가 > true
const c = el.classList.toggle("big"); //big이 있으니 삭제 > false

//toggle()은 클래스가 붙어 있으면 'true', 떨어져있으면 'false'를 돌려주는 개념으로 이해하면 됨

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("contains red:", el.classList.contains("red"));
console.log("className:", el.className);