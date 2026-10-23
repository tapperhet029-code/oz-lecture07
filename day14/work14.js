const books = [
    {title: "자바스크립트 입문", price: 22000, sold: 120},
    {title: "HTML 첫걸음", price: 18000, sold:80},
    {title: "CSS 레시피", price: 25000, sold: 150},
];
const cal = [
    books.reduce((b) => b.price>30000).title
];

console.log(books);
console.log(cal);


const nums = [2,4,6];
const total = nums.reduce((acc,num) => acc + num);

console.log(total);



