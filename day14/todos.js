// 실습 01 — 할 일 목록 다루기
const todos = [
  { id: 1, title: "장보기", done: true },
  { id: 2, title: "운동하기", done: true },
  { id: 3, title: "과제 제출", done: false },
  { id: 4, title: "책 읽기", done: false },
];

// 1. forEach로 전체 출력 — 끝낸 일은 [완료], 남은 일은 [ ]
todos.forEach((todo) => {
  const mark = todo.done ? "[완료]" : "[ ]";
  console.log(`${mark} ${todo.title}`);
});

// 2. filter로 남은 일만 고르기
const left = todos.filter((todo) => !todo.done);
console.log(`남은 일 ${left.length}개`);

// 3. map으로 남은 일의 제목만 모으기
const leftTitles = left.map((todo) => todo.title);
console.log(leftTitles);

// 4. 이어 쓰기 — 끝낸 일의 제목만
const doneTitles = todos.filter((todo) => todo.done).map((todo) => todo.title);
console.log(doneTitles);

// 5. 진행률 — 끝낸 일 수 ÷ 전체 수 × 100
const rate = (doneTitles.length / todos.length) * 100;
console.log(`진행률 ${rate}%`);


// DAY 13 실습 02 — 상품 목록 다루기

// 1. 상품 하나는 객체, 상품 목록은 객체 배열
const products = [
  { id: 1, name: "에코백", price: 12000, stock: 5 },
  { id: 2, name: "텀블러", price: 18000, stock: 0 },
  { id: 3, name: "머그컵", price: 9000, stock: 12 },
];

// 2. 하나씩 꺼내 보기 — 점 표기법과 대괄호 표기법
console.log(products[0].name);
console.log(products[2]["price"]);

// 3. 전체 목록을 출력하고 재고 금액을 더합니다
let total = 0;
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  console.log(`${item.id}. ${item.name} ${item.price}원 (재고 ${item.stock}개)`);
  total += item.price * item.stock;
}
console.log(`재고 금액 합계 ${total}원`);

// 4. 품절 상품의 이름만 모읍니다 — for + if + push
const soldOut = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].stock === 0) {
    soldOut.push(products[i].name);
  }
}
console.log("품절", soldOut);

// 5. 새 상품을 추가하고, 텀블러 가격을 바꿉니다
products.push({ id: 4, name: "키링", price: 5000, stock: 30 });
products[1].price = 16000;
console.log(`상품 ${products.length}개, 텀블러 ${products[1].price}원`);

// 6. 객체를 JSON 글로 바꾸고, 다시 객체로 되돌립니다
const json = JSON.stringify(products[3]);
console.log(json);
console.log(typeof json);
const item = JSON.parse(json);
console.log(item.name);

const pdctFiltered = products.filter((p)=>p.stock > 0);
const names = pdctFiltered.map((p)=>p.pdcName);
console.log(pdctFiltered);
console.log(names);

const nameOnce = products.filter((p) => p.stock>0).map;
