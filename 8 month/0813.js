// 변수
// var는 한번 선언된 변수를 다시 선언할 수 있다.
let name = "웅빈";
console.log(name);
let name = "세원"; // 오류

// var는 선언하기 전에 사용 할 수 있다.
console.log(name1); // 오류 안남
var name1 = "웅빈";

let age = 30;
function showAge() {
  console.log(age); // 에러 TDZ : Temporal Dead Zone
  let age = 20; 
}
showAge();

// var는 선언과 초기화를 동시에 함.
// let은 선언과 초기화가 분리됨.
// const는 선언과 초기화 할당을 동시에 해야함.