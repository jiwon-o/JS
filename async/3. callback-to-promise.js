// 콜백함수 지옥
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === "jiwon" && password === "dream") ||
//         (id === "coder" && password === "academy")
//       ) {
//         alert(`Hello ${id}, welcome.`);
//         onSuccess(id);
//       } else {
//         onError(new Error("not found"));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === "jiwon") {
//         onSuccess({ name: "jiwon", role: "admin" });
//       } else {
//         onError(new Error("no access"));
//       }
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");
// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Promise로 변경
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "jiwon" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          alert(`Hello ${id}, welcome.`);
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "jiwon") {
          resolve({ name: "jiwon", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user)) // .then(userStorage.getRoles)도 가능
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch((error) => console.log(error)); // .catch(console.log)도 가능
