const display = document.getElementById('display');
  const clearButton = document.getElementById('clear');
  const deleteButton = document.getElementById('delete');
  const dotButton = document.getElementById('dot');
  const divideButton = document.getElementById('divide');
  const multiplyButton = document.getElementById('multiply');
  const subtractButton = document.getElementById('subtract');
  const addButton = document.getElementById('add');
  const doubleZeroButton = document.getElementById('double-zero');
  const zeroButton = document.getElementById('zero');
  const equalButton = document.getElementById('equal');
  const digitButtons = document.querySelectorAll('.digit');

  clearButton.addEventListener('click', () => {
    display.value = '';
  });

  deleteButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
  });

  dotButton.addEventListener('click', () => {
    if (!display.value.includes('.')) {
      display.value += '.';
    }
  });

  divideButton.addEventListener('click', () => {
    display.value += '/';
  });

  multiplyButton.addEventListener('click', () => {
    display.value += '*';
  });

  subtractButton.addEventListener('click', () => {
    display.value += '-';
  });

  addButton.addEventListener('click', () => {
    display.value += '+';
  });

  doubleZeroButton.addEventListener('click', () => {
    display.value += '00';
  });

  zeroButton.addEventListener('click', () => {
    display.value += '0';
  });

  equalButton.addEventListener('click', () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  });

  digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
      display.value += button.value;
    });
  });