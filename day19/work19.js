//day 19 고급함수와 고차함수
console.log("work19.js가 연결되었습니다.");

const x = 1;

function order () {
    const x = 10;
    const inner = function () {
        console.log(x);
    };
    return inner;
}

const innerFunc = order();
innerFunc();

//카운터
let num = 0;

const increase = function() {
    return++num;
};

console.log(increase());
console.log(increase());
num = 100; //의도하지 않은 전연변수 변경
console.log(increase());

//카운터 : 클로저로 숨기고 기억하기
function makeIncrease() {
    let num = 0;
    return function () {
        return ++num;
    };
}
const increaseC = makeIncrease();
console.log(increaseC());
console.log(increaseC());
console.log(increaseC());

//this의 쓰임 : function과 arrow function
const timer = {
    second : 3,
    start() {
        setTimeout(function () {
            console.log("function :", this.seconds);
            console.log(this);
        },0); 
        setTimeout(()=> {
            console.log("화살표 :", this.seconds);
            console.log(this);
        },0);       
    },
};
timer.start();

//this의 쓰임 : 이벤트 리스너의 this
const likeBtn = document.querySelector("#like-Btn");

likeBtn.addEventListener("click", function() {
    this.textContent = "눌렀어요"
    console.log("function:", this);    
});

likeBtn.addEventListener("click", () => {
    console.log(this);
    console.log("화살표 :", this === window);
});

//기본객체 Math
console.log(Math.round(4.5)); //반올림
console.log(Math.floor(4.7)); //내림
console.log(Math.ceil(4.2));  //올림
console.log(Math.max(72,95,58));
console.log(Math.min(72,95,58));
console.log(Math.abs(-3));
console.log(Math.PI);
console.log(Math.random());

//기본객체 Date
const day = new Date();
console.log(day.getFullYear());
console.log(day.getMonth()+1); //월 0부터 시작
console.log(day.getDate()); //일
console.log(day.getDay()); //요일
console.log(day.getHours()); //시간

//Higher Order Function 함수
// const add = (a)=> (b) => a+b;

// const addFunction = (a) => {
//     let first = a;
//     return (b) => {
//         let second = b;
//         return a+b;
//     };
// };

// let a = 0;
// let b = 0;
// function add() {
//     return a+b;
// }

const add = (a) => (b) => a+b;
const add5 = add(5);

console.log(add5);
console.log(add(10));

function makeMultiple(n) {
    return function(x) {
        return x*n;
    };
}
const double = makeMultiple(2);
const triple = makeMultiple(3);
console.log(double(4), triple(4));

//for과 메서드 이어쓰기
const scores = [72, 95, 58, 88, 64];

//반복문 - 어떻게 할지를 한 단계씩
let total = 0;
for (let i=0; i<scores.length; i++) {
    const score = scores[i];
    if (score>=60) total +=score;
}

//method 이어쓰기 - 무엇을 할지를 차례로
const total2 = scores
    .filter((score)=>score>=60)
    .reduce((acc,score)=>acc+score,0);
console.log("method:", total2);