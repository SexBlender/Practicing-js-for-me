// let counter = 0;
// function handleClick(event) {
//   counter += 1;
//   count.textContent = counter;
// }

// clickBtn.onclick = handleClick;

// clickBtn.onmouseleave = function () {
//   clickBtn.style.background = '#e2e';
// };

// const functionResult = handleClick('click', 5);
// console.log(functionResult);

function calcBmi(weight, height) {
  // const bmi = weight / height ** 2;
  // const weightToNumber = Number.parseFloat(weight);
  const normalizeWeight = Number(replaceToDot(weight));
  const normalizeHeight = Number(replaceToDot(height));
  // const powHeight = Math.pow(height, 2);

  const bmi = normalizeWeight / normalizeHeight ** 2;
  // return Math.round(bmi * 10) / 10;
  return roundDecimal(bmi, 3);
}

function replaceToDot(value) {
  return value.replace(',', '.');
}

function roundDecimal(value, num = 1) {
  return Math.round(value * 10 ** num) / 10 ** num;
}

const bmi = calcBmi('88,3', '1.75');
console.log(bmi);
