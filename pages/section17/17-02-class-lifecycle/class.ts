// /*
// class Date {
//   qqq = 3
//   getFullYear() {}
//   getMonth() {}
// }

// const date = new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// */

// class Monster {
//   power = 50

//   attack() {
//     console.log("Attack!!");
//   }
// }

// // 상속
// class SuperMonster extends Monster {
//   run() {
//     console.log("run!!");
//   }

//   // 오버라이딩, 기존 attack함수를 다시 만들어 덮어씌기
//   attack() {
//     console.log("Super Attack!!");
//   }
// }
// /* 위 SuperMonster class는 아래와 같음
// class SuperMonster extends Monster {
//   power = 50

//   // 더 밑에 있는 attack함수로 덮어씌워짐(오버라이딩됨)
//   attack() {
//     console.log("Attack!!");
//   }

//   run() {
//     console.log("Run!!");
//   }

//   attack() {
//     console.log("Super Attack!!");
//   }
// }
// */

// const monster = new Monster();
// monster.power; // 50
// monster.attack(); // "Attack!!"

// const myMonster = new SuperMonster();
// myMonster.power; // 50
// myMonster.attack(); // "Super Attack!!"
// myMonster.run(); // "Run!!"