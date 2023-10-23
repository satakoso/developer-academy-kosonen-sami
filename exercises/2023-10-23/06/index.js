function isPositiveInteger(value, onSucces, onError) {
  value >= 0 ? onSucces() : onError();
}

isPositiveInteger(
  -1,
  () => console.log("Value was positive"),
  () => console.log("Error")
);
