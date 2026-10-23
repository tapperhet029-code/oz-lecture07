// DAY 13 실습 01 — 가게 대기 줄 관리하기

// 1. 대기 줄 — 먼저 온 손님이 앞(0번)에 섭니다
const waiting = ["김오즈", "이코딩", "박자바"];
console.log("처음 대기 줄", waiting);

// 2. 손님 두 명이 새로 와서 맨 뒤에 섭니다 — push
waiting.push("최리액", "정노드");
console.log(`대기 ${waiting.length}명`);

// 3. 맨 앞 손님이 입장합니다 — shift
const first = waiting.shift();
console.log(`${first}님 입장`);

// 4. 예약 손님은 맨 앞에 세웁니다 — unshift
waiting.unshift("한예약");

// 5. 박자바님이 줄을 떠납니다 — 자리를 찾아 splice
const index = waiting.indexOf("박자바");
waiting.splice(index, 1);

// 6. 다음 세 분만 따로 안내합니다 — slice (줄은 그대로)
const nextThree = waiting.slice(0, 3);
console.log("다음 세 분", nextThree);

// 7. 남은 줄을 번호와 함께 출력합니다
for (let i = 0; i < waiting.length; i++) {
  console.log(`${i + 1}번 ${waiting[i]}`);
}


const bread = {
  name : "팥붕어빵",
  price : 1000,
  ingredients : ["밀가루", "팥", "설탕"],
  isHot: true,
};
console.log(bread);
console.log("이름 :", bread.name);
console.log("가격 :", bread.price);
console.log("크기 :", bread.size);
console.log("뜨끈한가요?",bread["isHot"]);

bread.price = 500;
bread.owner = "김오즈";
console.log(bread);

const user = {
  userName : "김오즈",
  address : {
    city : "서울",
    zip : "04520"
  },
  likes : ["커피", "코딩"],
  greet() {
    return "안녕하세요";
  },
};
  console.log(user);
  console.log(user.address.city);
  console.log(user.likes[1]);
  console.log(user.likes.length);
  console.log(user.greet());
  console.log(user.address.zip);

  //객체 배열
  const products = [
    {
      id: 1,
      prctName: "에코백",
      price : 12000,
      stock : 5,
    },
    {
      id: 2,
      prctName: "텀블러",
      price : 18000,
      stock : 0,
    },

    {
      id : 3,
      prctName : "머그컵",
      price : 9000,
      stock : 12,
    },
  ];
  console.log(products);
  console.log(products[0].prctName);
  console.log(products[2].price);

  // 배열 for로 돌아보기
  let pdctTotal = 0;
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    console.log(`${item.name} ${item.price}원`);
    pdctTotal += item.price * item.stock;
  }
  console.log('재고 금액 합계 ${total}원');



   const cart = ["우유", "빵"];
   const a = cart.push("계란");
   const b = cart[cart.length - 1];
   const c = cart.shift();
   cart.unshift("버터");
   const d = cart.splice(1,1);
   const e = cart.slice(0,1);
   console.log(cart);

