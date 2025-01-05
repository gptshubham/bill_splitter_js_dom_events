// Selecting DOM Elements
const billAmount = document.querySelector('#bill_amount');
const allTipButtons = document.querySelectorAll('.tip-btn');
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
  if (bill) {
    // unlocking buttons
    for (const button of allTipButtons) {
      button.style.opacity = '1';
      button.style.cursor = 'pointer';
    }

    // unlocking grey inputs
    for (const el of greyInputs) {
      // removing disabled attribute
      el.disabled = false;
    }
  } else {
    for (const button of allTipButtons) {
      button.style.opacity = '0.6';
      button.style.cursor = 'not-allowed';
    }
    for (const el of greyInputs) {
      // removing disabled attribute
      el.disabled = true;
    }
  }
});

// variable to store tip percentage value
let tip = 0;
// Event Listener for tip percentage buttons
tipButtonContainer.addEventListener('click', (e) => {
  // removing the value of custom tip amount
  customTipAmountInput.value = '';
  if (e.target !== tipButtonContainer) {
    // removing outline from all buttons
    [...tipButtonContainer.children].forEach((button) => {
      button.classList.remove('selected');
    });
    // adding outline on the button clicked
    e.target.classList.add('selected');
    // tip percentage
    const tipPercentage = Number(parseInt(e.target.innerText));
    // tip amount
    tip = (bill * tipPercentage) / 100;

    // unlocking generate bill button
    if (numberOfPeopleInput.value && tip) {
      generateBillButton.disabled = false;
    } else {
      generateBillButton.disabled = true;
    }
  }
});

// Custom Tip Amount

// event listener to fetch the value of custom tip amount
customTipAmountInput.addEventListener('input', (e) => {
  // removing outline from tip percentage buttons
  [...tipButtonContainer.children].forEach((button) => {
    button.classList.remove('selected');
  });

  // tip amount
  tip = Number(customTipAmountInput.value);

  // unlocking generate bill button
  if (numberOfPeopleInput.value && tip) {
    generateBillButton.disabled = false;
  } else {
    generateBillButton.disabled = true;
  }
});

// Number of People
let numberOfPeople = 0;

numberOfPeopleInput.addEventListener('input', (e) => {
  if (Number(e.currentTarget.value) > 0) {
    numberOfPeople = Number(e.currentTarget.value);
  }
  // enabling generate bill button
  if (tip && numberOfPeopleInput.value) {
    generateBillButton.disabled = false;
  } else {
    generateBillButton.disabled = true;
  }
});

// Generate Bill Button Functionality

generateBillButton.addEventListener('click', (e) => {
  // total
  const total = bill + tip;

  // each person bill
  const eachPersonBill = Math.round(total / numberOfPeople);

  tipAmountOutput.textContent = `₹${tip}`;

  totalOutput.textContent = `₹${total}`;

  eachPersonBillOutput.textContent = `₹${eachPersonBill}`;

  // unlocking reset button
  resetButton.removeAttribute('disabled');

  resetButton.style.cursor = 'pointer';
});

// Reset Button functionality
resetButton.addEventListener('click', (e) => {
  billAmount.value = '';
  customTipAmountInput.value = '';
  customTipAmountInput.disabled = true;
  numberOfPeopleInput.value = '';
  numberOfPeopleInput.disabled = true;
  generateBillButton.disabled = true;

  for (const button of allTipButtons) {
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';
    button.classList.remove('selected');
  }

  tipAmountOutput.textContent = '';
  totalOutput.textContent = '';
  eachPersonBillOutput.textContent = '';

  resetButton.disabled = true;
});
