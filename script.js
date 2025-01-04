const root = document.querySelector('main');
// console.log(root);

const billAmount = document.querySelector('#bill_amount');
// console.log(billAmount);

const allTipButtons = document.querySelectorAll('.tip-btn');
// console.log(allTipButtons);

const customTipPercentageInput = document.querySelector(
  '#custom-tip-percentage'
);
// console.log(customTipPercentageInput);

const numberOfPeopleInput = document.querySelector('#number-of-people');
// console.log(numberOfPeopleInput);

const generateBillButton = document.querySelector('.generate-bill-btn');
// console.log(generateBillButton);

billAmount.addEventListener('input', (e) => {
  // console.log(e.currentTarget.value);
  const bill = Number(e.currentTarget.value);

  // unlocking buttons and other inputs if bill amount > 0
  if (bill > 0) {
    // unlocking buttons
    for (const el of allTipButtons) {
      el.style.opacity = '1';
      el.style.cursor = 'pointer';
    }

    // selecting grey inputs
    const greyInputs = document.querySelectorAll('.grey-input');

    // unlocking grey inputs
    for (const el of greyInputs) {
      // removing disabled attribute
      el.removeAttribute('disabled');
    }
  }
});
