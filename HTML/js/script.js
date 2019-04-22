function printMsg(msg) {
  console.log(msg);
}

function addNum(num1, num2) {
  return num1+num2
}

function checkLargeOrSmall(num) {
  return num > 10 ? true : false
}

let numArr=[1,2,3,4]
function loopArray(array) {
  for (var i in array) {
    console.log(array[i]);
  }
  for (const numArr of array) {
    console.log(numArr);
  }
  console.log(array);
}

const info = {
  name: 'Anas',
  age: 38
}
function showObj(obj) {
  console.log(obj);
}

function print() {
  console.log('Print');
}

function runFn(fn) {
  fn()
}

loopArray(numArr)

runFn(print)

showObj(info)

printMsg('test')
console.log(checkLargeOrSmall(11));
console.log(addNum(1,2));

window.onload=function(){
  console.log(document.getElementById('title'));
}
