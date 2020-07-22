function outArray(A, separator) {
  document.write ('[' + A + ']' + '<br/>' + separator);
}

let A = [2, 7, 4, 'Alex', true];
let separator = '**************************************';
outArray (A, separator + '<br/>');


let Arr = new Array(+prompt('Длина массива случайных значений = ')); 
let n = Arr.length;
function fillArray (Arr, n) {
  for (i = 0; i < Arr.length; i++) {
    Arr[i] = Math.floor(Math.random()*n);
  }
  document.write(Arr); 
}

fillArray(Arr, n);

