// let getTodos = async () => {
//   let response = await fetch("tsest.json");
//   if (response.status !== 404) {
//     let datas = await response.json();
//     return datas;
//   }
//   throw new Error("Url link is unavailable!");
// };
// getTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// let getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState == 4 && request.status == 200) {
//         let datas = JSON.parse(request.responseText);
//         resolve(datas);
//       } else if (request.status === 404) {
//         reject("Something went wrong!");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// let getTodos = (resource, callback) => {
//   let request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4 && request.status == 200) {
//       let datas = JSON.parse(request.responseText);
//       callback(datas, null);
//     } else if (request.status === 404) {
//       callback(null, "Something went wrong!");
//     }
//   });
//   request.open("GET", resource);
//   request.send();
// };

// getTodos("http://127.0.0.1:5500/test.json", (data, error) => {
//   console.log(data, error);
//   if (data) {
//     getTodos("http://127.0.0.1:5500/test.json", (data, error) => {
//       console.log(data, error);
//     });
//   }
// });

// getTodos("http://127.0.0.1:5500/test.json")
//   .then((data) => {
//     console.log(data);
//     return getTodos("http://127.0.0.1:5500/test.json");
//   })
//   .then((data) => {
//     console.log(data);
//     return getTodos("http://127.0.0.1:5500/test.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("http://127.0.0.1:5500/test.json")
//   .then((response) => {
//     if (response.status === 404) {
//       throw new Error("Something's went wrong!");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("http://127.0.0.1:5500/test.json");
//   })
//   .then((response) => {
//     if (response.status === 404) {
//       throw new Error("Something's went wrong!");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

let doSomething = async () => {
  let response = await fetch("http://127.0.0.1:5500/test.json");
  if (response.status === 404) {
    throw new Error("Something's went wrong & try again!");
  }
  let datas = await response.json();
  return datas;
};
doSomething()
  .then((data) => {
    console.log(data);
    return doSomething();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
