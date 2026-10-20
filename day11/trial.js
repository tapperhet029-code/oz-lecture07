const score = 95;

let grade;
if (score >= 90) {
    grade = "A";
} else if (score >=80) {
  grade = "B";
} else {
  grade = "C";
}

let message;
switch (grade) {
    case "A" :
        message = "최고예요.";
    break;
    case "B" :
        message = "좋아요";
    break;
    default :
        message = "보통이예요.";
}

const result = score >=60 ? "합격" : "불합격";
console.log(grade);
console.log(message);
console.log(result);

