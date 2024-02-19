function calculateTaxes(income) {
  if (!Number.isFinite(income)) {
    throw new Error('INVALID INPUT');
  }
  if (income > 30000) {
    return income * 0.25;
  }
  else {
    return income * 0.15;
  }
}


function removeDupes(values) {
  const arr = [...new Set(values)];
  if(typeof values === 'string') return arr.join('')
  return arr;
}

function remove(arr,val) {
  return arr.filter((el) => {el !== val})
}

const userNames = [];
let Input = document.getElementById('userName');

function submitForm() {
  userNames.push(Input.value);
}