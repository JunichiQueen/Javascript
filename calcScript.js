function getNumbers(operator){
  let x = Number(document.getElementById('num1').value);
  let y = Number(document.getElementById('num2').value);
  let z = x operator y;
  return z;
}

function addition(){
  let result = getNumbers(+);
  document.getElementById('result').value=result;
}

function subtraction(){
  let x = Number(document.getElementById('num1').value);
  let y = Number(document.getElementById('num2').value);
  let result = x - y;
  document.getElementById('result').value=result;
}

function multiplication(){
  let x = Number(document.getElementById('num1').value);
  let y = Number(document.getElementById('num2').value);
  let result = x * y;
  document.getElementById('result').innerHTML=result;
}

function division(){
  let x = Number(document.getElementById('num1').value);
  let y = Number(document.getElementById('num2').value);
  let result = x / y;
  document.getElementById('result').value=result;
}
