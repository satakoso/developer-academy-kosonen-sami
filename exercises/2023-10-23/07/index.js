function repeat(text, reps = 1) {
  let repeated = "";
  while (reps > 0) {
    repeated += text;
    reps -= 1;
  }
  return repeated;
}

console.log(repeat("moi"));
console.log(repeat("moi", 4));
