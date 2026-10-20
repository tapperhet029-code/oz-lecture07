const age = 15;
const day = "토"
const isMember = true;

let price;
if (age < 13) {
    price = 20000;
} else if (age < 19) {
    price = 30000;
} else {
    price = 46000;
}

const isWeekend = day === "토" || day === "일";

if (!isWeekend  && isMember) {
    price -= 5000;
} 

let notice;
switch (day) {
    case "토" :
    case "일" :
        notice = "주말에는 대기 줄이 깁니다";
}

const dayType = isWeekend ? "주말" : "평일";

console.log(`나이 ${age}세 · ${day}요일(${dayType}) · 회원 ${isMember}`);
console.log(`입장료 ${price}원`);
console.log(notice);