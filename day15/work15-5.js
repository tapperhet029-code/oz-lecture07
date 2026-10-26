const listEl = document.getElementById("list");
["사과", "배", "감"].forEach((fruit) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = fruit;
  listEl.appendChild(itemEl); //appendChild가 있어야 li 태그가 동작하면서 요소가 화면에 나타남. 얘가 없어지면 사라지는 개념이 아님.
});
const firstEl = document.querySelector("#list li");
listEl.removeChild(firstEl); 