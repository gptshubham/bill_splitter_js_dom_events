const billAmount = document.querySelector('#bill_amount');

const allTipButtons = document.querySelectorAll('.tip-btn');

const generateBillButton = document.querySelector('.generate-bill-btn');

// variable to store bill amount
let bill = 0;

// Event Listener for enabling disabled buttons and grey inputs based on the bill amount
billAmount.addEventListener('input', (e) => {
  // console.log(e.currentTarget.value);
  bill = Number(e.currentTarget.value);

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

// selecting tip-buttons-container
const tipButtonContainer = document.querySelector('.tip-btn-container');
// console.log(tipButtonContainer);

// variable to store tip percentage value
let tipPercentage = 0;
// Event Listener for tip percentage buttons
tipButtonContainer.addEventListener('click', (e) => {
  // console.log(e.target.id);
  tipPercentage = Number(e.target.id);
  // console.log(tipPercentage);
  // console.log(typeof tipPercentage);

  // orange border
  e.target.style.border = '5px solid orange';
});

// Custom Tip Amount

// selecting custom tip amount input element
const customTipAmountInput = document.querySelector('#custom-tip-amount');

// variable to store custom tip amount
let customTipAmount = 0;

// event listener to fetch the value of custom tip amount
customTipAmountInput.addEventListener('change', (e) => {
  customTipAmount = Number(e.currentTarget.value);
  // console.log(customTipAmount);
});

// Number of People

const numberOfPeopleInput = document.querySelector('#number-of-people');

let numberOfPeople = 1;

numberOfPeopleInput.addEventListener('input', (e) => {
  if (Number(e.currentTarget.value) > 0) {
    numberOfPeople = Number(e.currentTarget.value);
    console.log(numberOfPeople);
  }

  // unlocking generate bill button
  generateBillButton.removeAttribute('disabled');
});

// Generate Bill Button

generateBillButton.addEventListener('click', (e) => {
  // tip amount
  let tipAmount;
  if (customTipAmount) {
    tipAmount = customTipAmount;
  } else if (tipPercentage) {
    tipAmount = Math.round((bill * tipPercentage) / 100);
  } else {
    tipAmount = 0;
  }
  console.log(tipAmount);

  // total
  const total = bill + tipAmount;

  console.log(total);

  // each person bill
  const eachPersonBill = Math.round(total / numberOfPeople);
  console.log(eachPersonBill);

  const tipAmountOutput = document.querySelector('#tip-amount-output');
  tipAmountOutput.textContent = tipAmount;

  const totalOutput = document.querySelector('#total-output');
  totalOutput.textContent = total;

  const eachPersonBillOutput = document.querySelector(
    '#each-person-bill-output'
  );
  eachPersonBillOutput.textContent = eachPersonBill;
});
