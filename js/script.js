function limpar(){
  if(document.getElementById('dec').value == "NaN" || document.getElementById('bin').value == "NaN" || document.getElementById('oct').value == "NaN" || document.getElementById('hex').value == "NaN"){
    document.getElementById('dec').value = "";
    document.getElementById('bin').value = "";
    document.getElementById('oct').value = "";
    document.getElementById('hex').value = "";
  }
}

function decimalparabinario(){
  var get = parseInt(document.getElementById('dec').value, 10);
  document.getElementById('bin').value = get.toString(2);
  limpar();
}
function decimalparaoctal(){
  var get = parseInt(document.getElementById('dec').value,10);
  document.getElementById('oct').value = get.toString(8);
  limpar();
}
function decimalparahexacimal(){
  var get = parseInt(document.getElementById('dec').value,10);
  document.getElementById('hex').value = get.toString(16);
  limpar();
}

function binarioparadecimal(){
  var get = document.getElementById('bin').value;
  document.getElementById('dec').value = parseInt(get,2);
  decimalparaoctal();
  decimalparahexacimal();
}

function octalparadecimal(){
  var get = document.getElementById('oct').value;
  document.getElementById('dec').value = parseInt(get,8);
  decimalparabinario();
  decimalparahexacimal();
}

function hexacimalparadecimal(){
  var get = document.getElementById('hex').value;
  document.getElementById('dec').value = parseInt(get,16);
  decimalparaoctal();
  decimalparabinario();
}




















// var k = 0, c = 0, f = 0;
// function celsiuspara(){
//   c = parseInt(document.getElementById('celsius').value, 10);
//   k = c+273; //Celsius para Kelvin
//   f = 1.8*c+32; //Celsius para Fahrenheit
//   if (isNaN(k) || isNaN(f)) {
//     document.getElementById("kelvin").value = '';
//     document.getElementById("fahren").value = '';
//   }else{
//     document.getElementById("kelvin").value = k;
//     document.getElementById("fahren").value = f.toFixed(2);
//
//   }
// }
