

function hypotenuse() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("a").innerHTML = "a = " + num1;
  document.getElementById("b").innerHTML = "b = " + num2;
  document.getElementById("c").innerHTML = "c2 = " + (num1 ** 2) + " + " + (num2 ** 2);
  document.getElementById("c2").innerHTML = "c = " + Math.sqrt((num1 ** 2 + num2 ** 2));

}