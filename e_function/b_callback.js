// // 첫 번째, 두 번째 매개변수는 값이지만, 세 번째에 작성된 callback에는 함수가 들어온다.
// const add = (number1, number2, callback) => {
//     // 만약 callback에 아무것도 전달되지 않았다면, undefined이다.
//     // 이는 조건식 자리에 작성할 경우 false를 의미한다.
//     if (callback) {
//         // 만약 callback 함수가 전달되었다면,
//         // 전달받은 callback 함수를 사용한다.
//         // 단, 전달한 함수의 매개변수 구조를 알아야 사용할 수 있다.
//         callback(number1 + number2);
//     }
//     // 만약 callback에 함수를 전달받지 않았다면, 두 정수의 결과를 리턴한다.
//     return number1 + number2;
// };

// // 출력하지 않고 6 리턴
// let total = add(1, 5);

// // 출력하고 6 리턴
// total = add(1, 5, (result) => {
//     console.log(result);
// });

// 1. 두 정수의 곱셈을 구한 뒤
// const multiple = (number1, number2, callback) => {
//     let result = number1 * number2;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };
// // 2. 결과에 2를 곱해서 출력
// const printResult = (result) => {
//     console.log(result * 2);
// };

// multiple(3, 5, printResult);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력

// const fullname = (lastname, firstname, callback) => {
//     let result = lastname + firstname;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };

// const printResult = (result) => {
//     console.log(result + "님");
// };

// fullname("최", "대환", printResult);

// 상품 1개 가격과 총 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const product = (price, total, callback) => {
//     let result = total / price;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };

// const printStock = (result) => {
//     let result2 = result < 6;
//     console.log(result2 && true);
// };

// product(500, 2500, printStock);
// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제완료, false일 경우 결제 취소 출력

// const order = (price, status, callback) => {
//     let result = status;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };

// const printOrder = (status) => {
//     console.log(status ? "결제완료" : "결제실패");
// };

// order(500, true, printOrder);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = price / total;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// // let check = getCount(140000, 70000, checkLessEqaulThan5);
// // console.log(check);

// // let count = getCount(140000, 70000);
// // console.log(count);

// // 결제 상품 가격과 결제 상태를 전달받아서
// // 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const setStatus = (price, status, callback) => {
//     if (callback) {
//         callback(status ? price + "원 결제 완료" : price + "원 결제 취소");
//     }
// };

// setStatus(3000, true, console.log);

// 템플릿 문법
// let price = 1000;
// console.log(`${price}원`);
// let status = true;
// status ? `${price}원 결제 완료` : `${price}원 결제 취소`;

// 문제 3개 만들어서 팀원에게 공유

// 동물의 종류와 몸무게를 전달 받아서 몸무게가 3kg 이하 일때 true, 그 외에는 false값 반환
// const getWeight = (kind, weight, callback) => {
//     result = weight;
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const checkLessEqaulThan3 = (result) => {
//     return result <= 3;
// };

// let check = getWeight("강아지", 4, checkLessEqaulThan3);
// console.log(check);

// 게임의 종류와 플레이상태를 전달받고, true면 게임중, false면 게임 중이 아닙니다 를 출력(탬플릿 문법으로 풀어보기)

// function playGame(gamekind, playing) {
//     if (playGame) {
//         console.log(
//             playing
//                 ? `게임 중 ${gamekind} 플레이`
//                 : `게임 중이 아닙니다 ${gamekind} 플레이 `
//         );
//     }
// }
// let check = playGame("오버워치", false);

// 비행기를 예약할 때, 1인의 표값과 결제한 총 표값을 입력받고 예약 인원이 4인 이상이면 family, 그미만이면 friend를 출력
const airplain = (price, totalprice, callback) => {
    personnel = totalprice / price;

    if (callback) {
        return callback(personnel);
    }
    return personnel;
};
