const userName = 'Jacob Mercer Junior';
const userEmail = formEmail.value;
const normalize = userEmail.trim();
const checkSymbolEmail = normalize.includes('@');
const checkDomainEmail = userEmail.endsWith('.com');

// console.log(checkDomainEmail);
// console.log(normalize);
// console.log(checkSymbolEmail);

// const res = userName.replaceAll(' ', '  ');
// console.log(res);

const checkWord = 'junior';
const normalizedUserName = userName.toLowerCase();
const isJunior = normalizedUserName.includes(checkWord);

if (isJunior) {
  const updName = normalizedUserName.replace('junior', 'senior');
  // console.log(updName);
}

const firstLetter = normalizedUserName[0];
const capitalizedFirstLetter = firstLetter.toUpperCase();
// normalizedUserName[0] = capitalizedFirstLetter; // ❌ Так делать нельзя, строки неизменяемы
const strCopy = normalizedUserName.slice(1);
// console.log(strCopy);

const result = capitalizedFirstLetter + strCopy;
// console.log(result);

// const string = 'Mangogo';
// const res2 = string.indexOf('go', 4);
// console.log(res2);

const blackListWord1 = 'spam';
const blackListWord2 = 'sale';

const string1 = 'Get best sale offers now!';
const check1 = string1.toLowerCase().includes(blackListWord1);
const check2 = string1.toLowerCase().includes(blackListWord2);

if (check1 || check2) {
  // console.log(string1);
  // console.log('You have got blacklisted words in your string!');
}

// function checkSpamWords(str, blackListWord1 = 'spam', blackListWord2 = 'sale') {
//   const hasSpamWord =
//     str.toLowerCase().includes(blackListWord1) ||
//     str.toLowerCase().includes(blackListWord2);

//   if (hasSpamWord) {
//     console.log('You have got blacklisted words in your string!');
//   } else {
//     console.log('Your string is clean.');
//   }
// }

// checkSpamWords('Get best sale offers now!');
// checkSpamWords('Amazing SalE, only today!');
// checkSpamWords('Get rid of SPAM emails.');
// checkSpamWords('This is a normal string.');

// console.log('Before');

const str = 'mango';
// let updatedStr = '';

// debugger;
// for (let i = 0; i < str.length; i += 1) {
//   const letter = str[i];
//   if (letter === 'g' || letter === 'o') {
//     updatedStr += letter.toUpperCase();
//     continue;
//   }
//   updatedStr += letter;
// }

// console.log(updatedStr);

// console.log('After');

const min = 0;
const max = str.length - 1;

for (let i = max; i >= min; i -= 1) {
  console.log(i);
}
