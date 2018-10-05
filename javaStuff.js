function number1() {
  var x;
  if (confirm("press a button!") == true){
    x = "you pressed OK!, now you are going to see more stuff"
  } else {
    x = "Why did you press cancel, you hurt my feelings"
  }
  document.getElementById("test").innerHTML = x;
}
