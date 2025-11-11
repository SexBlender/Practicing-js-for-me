// console.log('before');

// const str = 'mango is my favorite fruit';
// let updatedStr = '';

// for (let i = 0; i < str.length; i += 1) {
//   const letter = str[i];

//   if (letter === 'g' || letter === 'o') {
//     updatedStr += letter.toUpperCase();
//     continue;
//   }
//   updatedStr += letter;
// }

// console.log(updatedStr);

// console.log('after');

// const min = 0;
// const max = str.length - 1;

// for (let i = max; i >= min; i -= 2) {
//   console.log(str[i]);
// }

// let w = 1;
// console.log(++w);
// console.log(w);

// let counter = 0;
// let sum = 0;

// while (counter < 10) {
//   counter++;
//   sum += counter;
// }

// console.log(sum);

// let a = 100;
// let b = 20;

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

const minimum = 5;
const maximum = 15;

// let total = 0;

// for (let i = minimum; i <= maximum; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// function calcEvenNumbersSum(minimum, maximum) {
//   if (minimum > maximum) {
//     let temp = minimum;
//     minimum = maximum;
//     maximum = temp;
//   }

//   let total = 0;
//   for (let i = minimum; i <= maximum; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }

// const res = calcEvenNumbersSum(5, 15);
// console.log(res);
// const res1 = calcEvenNumbersSum(10, 30);
// console.log(res1);
// const res2 = calcEvenNumbersSum(20, 10);
// console.log(res2);

function checkPassword(password) {
  if (password === 'admin123') {
    return 'Access granted';
  } else if (password === '') {
    return 'Canceled by user';
  } else {
    return 'Access denied, wrong password!';
  }
}
const res = checkPassword('');
console.log(res);
