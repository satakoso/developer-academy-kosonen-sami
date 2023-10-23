function isPositiveInteger(value, onSucces, onError) {
  value >= 0 ? onSucces() : onError();
}

isPositiveInteger(
  6,
  function () {
    console.log("Value was positive");
  },
  function () {
    console.log("Error");
  }
);
