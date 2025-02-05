const user = {
  name: "John",
  age: 30,
  salary: 1000,
  job: "Фермер",
  animals: {
    cows: ["yellow", "white", "black"],
    cats: ["green", "blue", "purple"],
  },
};

const user2 = {
  job: "Поляк",
  animals: "cat",
};
const user3 = {
  job: "Менеджер",
  animals: "dog",
  isAdmin: true,
};

const user4 = { ...user2, ...user3, ...user };
console.log(user4);

// const [_g, _b, purple] = user.animals.cats;
// const { cows, cats } = user.animals;
// console.log(cows, cats);

// // for (let key in user) {
// //     console.log(`${key}: ${user[key]}`);
// // }

// // console.log(Object.keys(user));
// // console.log(Object.values(user));

// // console.log(Object.entries(user));

// const Obj = {
//   values(object) {
//     const a = [];
//     for (let key in object) {
//       a.push(object[key]);
//     }
//     return a;
//   },
//   entries(object) {
//     const a = [];
//     for (let key in object) {
//       a.push([key, object[key]]);
//     }
//     return a;
//   },
//   keys(object) {
//     const a = [];
//     for (let key in object) {
//       a.push(key);
//     }
//     return a;
//   },
// };

// console.log(Obj.entries(user));
