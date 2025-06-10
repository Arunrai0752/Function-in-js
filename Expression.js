const sumof2 = function (a, b) {
  return a + b;
};
console.log(sumof2(10, 20));

const sumof3 = function (a, b, c) {
  return a + b + c;
};
console.log(sumof3(10, 20, 30));

const adult = function (age) {
  if (age >= 19) {
    console.log("You are an adult");
  } else {
    console.log("You are not an adult");
  }
};
adult(20);

const firstchar = function (String) {
  // return String[0];
  return String.charAt(0);
};

console.log(firstchar("Arun"));

const lastchar = function (String) {
  return String[String.length - 1];
  // return String.charAt(String.length - 1);
};
console.log(lastchar("Arun"));

const findtarget = function (arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;
console.log(findtarget(arr, target));


