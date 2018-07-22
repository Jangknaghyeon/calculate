var input = document.getElementById("good");
var button = document.getElementById("job");
var output = document.getElementById("output");
button.addEventListener("click", function(){
  var output1 = input.value;
  for (var i = 1; i < input.value.length / 3; i++) {
    output1 = output1.slice(0, output1.length - i * 4 + 1) + "," + output1.slice(output1.length - i * 4 + 1, output1.length);
  }
  output.innerHTML = output1;
});
