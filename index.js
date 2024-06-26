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
// // fetch("test.json")
// //   .then((response) => {
// //     if (response.status !== 404) {
// //       return response.json();
// //     }
// //     throw new Error("Url link is unavailable!");
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error.message);
// //   });

// // const getTodos = (resource) => {
// //   return new Promise((resolve, reject) => {
// //     let request = new XMLHttpRequest();
// //     request.addEventListener("readystatechange", () => {
// //       if (request.readyState === 4 && request.status === 200) {
// //         let data = JSON.parse(request.responseText);
// //         resolve(data);
// //       } else if (request.status === 404) {
// //         reject("Url link is unavailable!");
// //       }
// //     });
// //     request.open("GET", resource);
// //     request.send();
// //   });
// // };

// // getTodos("http://localhost:5500/test.json")
// //   .then((data) => {
// //     if (data) {
// //       console.log(data);
// //       return getTodos("http://localhost:5500/test.json");
// //     }
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });
let getTodos = (callback) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText,null);
      console.log();
    }
    callback(null,"Something went wrong!")
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
  request.send();
};

getTodos((data, error)=>{
  console.log(data, error);
});
