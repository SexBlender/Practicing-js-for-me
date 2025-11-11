const names = ['Broder', 'Psischo', 'Ninja', 'Samurai'];
// console.log(names);

names[0] = 'Warrior';
// console.log(names);

const lastIndex = names.length - 1;
const lastElement = names[lastIndex];
const lastElementAt = names.at(-2);
// console.log('Last element using at():', lastElementAt);
// console.log('Last element:', lastElement);
// console.log('Last index:', lastIndex);

const idx = Number(prompt('Enter index of element to search:'));
const searchedElement = names[idx];
// console.log('Searched element:', searchedElement);

// for (const name of names) {
//   console.log(name);
// }

const course = 'javascript';
const courseArray = course.split('');
// console.log('Course as array of characters:', courseArray);
courseArray[0] = courseArray[0].toUpperCase();
courseArray[4] = 'S';
// console.log('Modified course array:', courseArray);
const capitalizedCourse = courseArray.join('');
// console.log('Capitalized course:', capitalizedCourse);

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
// const updatedCourses = [...courses];
// const updatedCourses = Array.from(courses);
// const updatedCourses = courses.slice();
const updatedCourses = [].concat(courses);
// console.log('Original courses:', courses);
// console.log('Updated courses:', updatedCourses);

const someCourses = courses.slice(-2);
// console.log(someCourses);

const updCourses = ['Next.js', 'Apollo client', 'Angular'];
const upd2Courses = ['Vue.js', 'NoSQL', 'Algorithms'];
const newCourses = updCourses.concat(courses, upd2Courses);
newCourses.pop();
newCourses.push('TypeScript');
// console.table(newCourses);

const isInCourses = courses.includes('JavaScript');
// console.log('Is JavaScript in courses?', isInCourses);

// console.log('Index of React:', idxEl);
// console.log(newCourses[idxEl]);

// const newCourses = courses.concat(['Next.js', 'Apollo client', 'Angular']);
// console.log('New courses:', newCourses);

const friends = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// for (let i = 0; i < friends.length; i += 1) {
//     const element = friends[i];
//   const element = friends.at(i);
//   console.log(element);
// }

// for (let i = 1; i <= friends.length; i++) {
//   console.log(i * -1);
//   const element = friends.at(i * -1);
//   console.log(element);
// }

// for (const element of friends) {
//   console.log(element);
//   if (element === 'Ajax') {
//     console.log(element);
//     break;
//   }
//   console.log(element);
// }

const values = '8px 11.5px';

const valuesArray = values.split(' ');
let area;
const width = Number.parseFloat(valuesArray[0]);
const height = Number.parseFloat(valuesArray[1]);
if (!isNaN(width) && !isNaN(height)) {
  area = width * height;
}
// console.log('Area:', area);

// const square = Number(valuesArray[0]) * Number(valuesArray[1]);
// console.log('Square:', square);

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// let output = '';

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   output += `${i + 1} - ${fruit}\n`;
//   console.log(i + 1);
//   console.log(fruit);
// }
// console.log(output);
// fruitsList.innerText = output;

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;
// let odd = 0;
// let even = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     even += number;
//   } else {
//     odd += number;
//   }
// }
// console.log('Total of even numbers:', even);
// console.log('Total of odd numbers', odd);

// const namesUsers = 'Anna, Bob, Charlie, Diana, Ethan';
// const phones = '5551234, 5555678, 5558765, 5554321, 5550000';
// let contactBook = '';

// const namesArray = namesUsers.split(', ');
// const phonesArray = phones.split(', ');

// for (let i = 0; i < namesArray.length; i += 1) {
//     const name = namesArray[i];
//     const phone = phonesArray[i];
//   contactBook += `${i + 1} - ${namesArray[i]}: ${phonesArray[i]}\n`;
// }
// console.log(contactBook);

// const string = 'Welcome to the feature';
// const words = string.split(' ');

// let output = '';

// for (let i = 0; i < words.length; i += 1) {
//   if (i === 0 || i === words.length - 1) {
//     continue;
//   }
//   output += `${words[i]} `;
// }

// const output2 = words.slice(1, words.length - 1).join(' ');
// console.log(output.trim());
// console.log(output2);

// const values2 = [10, 20, 30, 40, 50];
// let min;

// min = Math.min(...values2);
// console.log(min);

// const fn2 = function () {

// }

// function fn1(par1, par2) {
//   const first = arguments[0];

//   const args = Array.from(arguments);
//   console.log(args);
//   console.log(args.concat(1, 2, 3));
//   for (let i = 0; i < arguments.length; i++) {
//     const elem = arguments[i];
//     console.log(elem);
//   }
//   for (const element of arguments) {
//     console.log(element);
//   }
// }

// const res = fn1(12, 59);

// function add() {
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }
//   return total;
// }

// const res2 = add(1, 2, 3);
// const res3 = add(1, 2, 4, 5, 6);

// console.log(res3);

// function calcAvarage() {
//   return add(...arguments) / arguments.length;
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }
//   return total / arguments.length;
// }

// const res = calcAvarage(1, 2, 3, 4);
// console.log(res);

// const globalValue = 10;

// console.log(globalValue);

//

// function fnA() {
//   console.log('fnA');
//   fnB();
// }

// function fnB() {
//   console.log('fnB');
//   fnC();
// }

// function fnC() {
//   console.log('fnC');
// }

// console.log('Before fnA');
// fnA();
// console.log('After fnA');

// console.log('Before fnB');
// fnB();
// console.log('After fnB');

// console.log('Before fnC');
// fnC();
// console.log('After fnC');

// function logItems(items = []) {
//   let output = '';
//   for (let i = 0; i < items.length; i++) {
//     output += `${i + 1} - ${items[i]}\n`;
//   }
//   let counter = 1;
//   for (const item of items) {
//     output += `${counter} - ${item}\n`;
//     counter++;
//   }
//   return output;
// }

// const res = logItems(['Mango', 'Poly', 'Ajax']);
// console.log(res);

// function printInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const phone = phones[i];
//     console.log(`${name}: ${phone}`);
//   }
// }

// printInfo('Baton, Ponton, Return, Freeturn', '1488, 1544, 8814, 1914');

function formatTime(minutes) {
  const days = Math.floor(Math.floor(minutes / 60) / 24);
  const hours = Math.floor(minutes / 60 - days * 24);
  // const hour = Number.parseInt(minutes / 60);
  const restMinutes = minutes % 60;
  const doubleHours = normalizeDigits(hours);
  const doubleMinutes = normalizeDigits(restMinutes);

  const output =
    days === 0 && hours < 0
      ? `${normalizeDigits(hours)} hours ${normalizeDigits(
          restMinutes
        )} minutes`
      : hours === 0
      ? `${normalizeDigits(restMinutes)} minutes`
      : restMinutes === 0
      ? '00 days, 00 hours 00 minutes'
      : `${normalizeDigits(days)} days ${normalizeDigits(
          hours
        )} hours ${normalizeDigits(restMinutes)} minutes`;
  console.log(output);
}

function normalizeDigits(value, digitsLength = 2, fill = '0') {
  if (typeof value !== 'number') return;
  return String(value).padStart(digitsLength, fill);
}

console.log(formatTime(19));
