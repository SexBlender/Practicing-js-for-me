// deliveryOption.onchange = function (event) {
//   const selectEl = event.target;
//   const option = Number(selectEl.selectedOptions[0].value);
//   console.log(option);

//   switch (option) {
//     case 1:
//       output.textContent = 'Можете забрати товар завтра з 12:00';
//       break;
//     case 2:
//       output.textContent = 'Курєр доставить замовлення завтра з 9:00 до 18:00';
//       break;
//     case 3:
//       output.textContent = 'Пакунок буде відправлено сьогодні';
//       break;
//     default:
//       output.textContent = 'Менеджер зателефонує для уточнення деталей';
//   }
// };

// const option = 2;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Можете забрати товар завтра з 12:00';
//     break;
//   case 2:
//     message = 'Курєр доставить замовлення завтра з 9:00 до 18:00';
//     break;
//   case 3:
//     message = 'Пакунок буде відправлено сьогодні';
//     break;
//   default:
//     message = 'Менеджер зателефонує для уточнення деталей';
// }

// console.log(message);

function initSelect(selector = '') {
  if (selector.length === 0) {
    console.warn('Select HTML element');
    return;
  }
  handleSelect(null, selector);
}

function handleSelect(event, element = null) {
  let selectEl;
  if (element || !event) {
    selectEl = element;
  } else {
    selectEl = event.target;
  }
  const option = Number(selectEl.selectedOptions[0].value);

  switch (option) {
    case 1:
      output.textContent = 'Можете забрати товар завтра з 12:00';
      break;
    case 2:
      output.textContent = 'Курєр доставить замовлення завтра з 9:00 до 18:00';
      break;
    case 3:
      output.textContent = 'Пакунок буде відправлено сьогодні';
      break;
    default:
      output.textContent = 'Менеджер зателефонує для уточнення деталей';
  }
}

initSelect(deliveryOption);

deliveryOption.onchange = handleSelect;
