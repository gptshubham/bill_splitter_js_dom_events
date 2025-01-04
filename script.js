const billAmount = document.querySelector('#bill_amount');

const allTipButtons = document.querySelectorAll('.tip-btn');

// selecting grey inputs
const greyInputs = document.querySelectorAll('.grey-input');

const customTipAmountInput = document.querySelector('#custom-tip-amount');
const tipButtonContainer = document.querySelector('.tip-btn-container');
const numberOfPeopleInput = document.querySelector('#number-of-people');
const generateBillButton = document.querySelector('.generate-bill-btn');

const resetButton = document.querySelector('.reset-btn');

const tipAmountOutput = document.querySelector('#tip-amount-output');

const totalOutput = document.querySelector('#total-output');

const eachPersonBillOutput = document.querySelector('#each-person-bill-output');

// variable to store bill amount
let bill = 0;

// Event Listener for enabling disabled buttons and grey inputs based on the bill amount
billAmount.addEventListener('input', (e) => {
  bill = Number(e.currentTarget.value);

  // unlocking buttons and other inputs if bill amount > 0
  if (bill > 0) {
    // unlocking buttons
    for (const el of allTipButtons) {
      el.style.opacity = '1';
      el.style.cursor = 'pointer';
    }

    // unlocking grey inputs
    for (const el of greyInputs) {
      // removing disabled attribute
      el.removeAttribute('disabled');
    }
  }
});

// variable to store tip percentage value
let tipPercentage = 0;
// Event Listener for tip percentage buttons
tipButtonContainer.addEventListener('click', (e) => {
  tipPercentage = Number(e.target.id);
});

// Custom Tip Amount

// variable to store custom tip amount
let customTipAmount = 0;

// event listener to fetch the value of custom tip amount
customTipAmountInput.addEventListener('change', (e) => {
  customTipAmount = Number(e.currentTarget.value);
});

// Number of People

let numberOfPeople = 1;

numberOfPeopleInput.addEventListener('input', (e) => {
  if (Number(e.currentTarget.value) > 0) {
    numberOfPeople = Number(e.currentTarget.value);
  }

  // unlocking generate bill button
  generateBillButton.removeAttribute('disabled');
});

// Generate Bill Button Functionality

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

  // total
  const total = bill + tipAmount;

  // each person bill
  const eachPersonBill = Math.round(total / numberOfPeople);

  tipAmountOutput.textContent = tipAmount;

  totalOutput.textContent = total;

  eachPersonBillOutput.textContent = eachPersonBill;

  // unlocking reset button
  resetButton.removeAttribute('disabled');
  resetButton.style.cursor = 'pointer';
  resetButton.style.cursor = 'default';
});

// Reset Button functionality
resetButton.addEventListener('click', (e) => {
  billAmount.value = '';
  customTipAmountInput.value = '';
  customTipAmountInput.disabled = true;
  numberOfPeopleInput.value = '';
  numberOfPeopleInput.disabled = true;
  generateBillButton.disabled = true;

  for (const el of allTipButtons) {
    el.style.opacity = '0.6';
    el.style.cursor = 'not-allowed';
  }

  tipAmountOutput.textContent = '';
  totalOutput.textContent = '';
  eachPersonBillOutput.textContent = '';
});
