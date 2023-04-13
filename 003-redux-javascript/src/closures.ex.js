function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
console.log(answer);
// answer(1337);
