function helloMonday(fn) {
  setTimeout(() => {
    console.log("Hello Monday");
    fn(76);
  }, 1000);
}

function helloTuesday(brexit, fn) {
  setTimeout(() => {
    console.log("Hello Tuesday", brexit);
    fn();
  }, 500);
}

helloMonday(function (brexit) {
  helloTuesday(brexit, function () {
    console.log(brexit);
  });
});
