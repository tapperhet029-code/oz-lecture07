// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");


const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);
console.log(fruits[5]);
console.log(fruits.length);

fruits[1] = "망고";
console.log(fruits);

//맨 뒤에 더할 때는 번호 대신
fruits.push("포도");
console.log(fruits);

//length로 처음부터 끝까지 반복시키기
const scores = [80,95,70,55];
let total = 0;
for (let index = 0; i < score.length; i++) {
    const score = scores[i];
}
console.log("총합", total);
console.log("평균", total / score.length);

// 배열에 요소 넣기 빼기
console.log(fruits); // 배열 뒤에 추가
fruits.push("딸기");
console.log(fruits);
fruits.pop("딸기"); // 배열 뒤에 빼기

const poped = fruits.pop(); // 배열 뒤에 빼기
console.log(poped);
console.log(fruits);

fruits.unshift("수박") // 배열 앞에 추가
console.log(fruits);

const shifted = fruits.shift();
console.log(shifted);
console.log(fruits);


//배열 splice (지우기, 바꾸기, 끼워넣기)
const removed = fruits.splice(1,1);
console.log(removed);
console.log(fruits);

//JSON => 객체
const back = JSON.parse(json);
console.log(back);

//60점 이상이면 합격, 그 외는 불합격
let score = 50;
let result = "";
if (score >= 60) {
    result = "합격";
} else {
    result = "불합격";
}
  console.log(result);

  let result3 = (score >=60) ? "합격" : "불합격";
  console.log(result3);
 
