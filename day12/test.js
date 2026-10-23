function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return;
  }
  return num1 + num2;
}

const double = (n) => n * 2;

function greet(name = "회원") {
  return `${name}님, 안녕하세요`;
}

console.log(sum(10, 20));
console.log(sum("a", "b"));
console.log(double(sum(1, 2)));
console.log(greet());
console.log(greet("김오즈"));