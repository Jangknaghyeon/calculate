function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mul(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

var first = document.getElementById("first");
var second = document.getElementById("second");
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var mulBtn = document.getElementById("mul");
var divBtn = document.getElementById("div");
var calcOutput = document.getElementById("calc-output")

addBtn.addEventListener("click", function(){
  calcOutput.innerHTML = add(parseFloat(first.value), parseFloat(second.value));
});

subBtn.addEventListener("click", function(){
  calcOutput.innerHTML = sub(parseFloat(first.value), parseFloat(second.value));
});

mulBtn.addEventListener("click", function(){
  calcOutput.innerHTML = mul(parseFloat(first.value), parseFloat(second.value));
});

divBtn.addEventListener("click", function(){
  calcOutput.innerHTML = div(parseFloat(first.value), parseFloat(second.value));
});
