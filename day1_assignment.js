// 문제 1. 1부터 10까지 숫자 중 짝수만 출력합니다.
console.log("문제 1. 1부터 10까지 숫자 중 짝수만 출력합니다.");
for (let i = 1; i <= 10; i++ ){
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 문제 2. 1부터 20까지 숫자의 합계를 출력합니다.
console.log("문제 2. 1부터 20까지 숫자의 합계를 출력합니다.");
let sum = 0;
for (let i = 1; i <=20; i++ ){
    sum += i;
}
console.log(sum);

// 문제 3. printStars(maxLine) 함수를 만들고 printStars(4)를 실행했을 때 아래 모양이 출력되게 합니다.
// maxLine은 출력할 줄 수입니다. 오늘은 .repeat()를 쓰지 말고 반복문과 문자열 이어 붙이기로 풉니다.
console.log("문제 3. 별모양 출력")
function printStars(maxLine){
    for(let i = 1; i <= maxLine; i++){
        let stars = "";

        for(let j = 1; j <= i; j++){
            stars += "*";
        }
        console.log(stars);
    }
    }
printStars(4);

// 문제 4. getTypeMessage(value) 함수를 만들고, 값의 자료형에 따라 아래 문장을 돌려줍니다. typeof를 사용합니다.
console.log("문제 4. 자료형에 따른 출력")

// 문제 5. getGrade(score) 함수를 만들고 점수에 따라 등급 문장을 돌려줍니다.
console.log("문제 5. 점수에 따른 등급")
