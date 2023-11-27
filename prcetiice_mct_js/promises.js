
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

 console.log(myPromise);
//   .then(handleFulfilledA, handleRejectedA);
