function isPositiveInteger(value, onSucces, onError) {
  value >= 0 ? onSucces() : onError();
}

function succes() {
  console.log("value was positive!");
}

function error() {
  console.log("Error");
}

isPositiveInteger(5, succes, error);
