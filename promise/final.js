function helloMonday() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello Monday");
      resolve("butterfly");
    }, 1000);
  });
}

function helloTuesday() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello Tuesday!");
      resolve("artichoke");
    }, 1000);
  });
}

function helloWednesday() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello Wednesday! the prev function returned");
      resolve("gunpowder");
    }, 1000);
  });
}

Promise.all([helloMonday(), helloTuesday(), helloWednesday()]).then((result) =>
  console.log("DOne", result)
);
