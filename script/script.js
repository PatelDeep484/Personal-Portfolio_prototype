function validate() {
  if (
    /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/.test(
      document.getElementById("form").Postal.value
    )
  ) {
    return true;
  }
  alert("Invalid Postal Code!");
  return false;
}

function hiring() {
  var row = document.getElementById("hire_rate");
  row.innerHTML = "Hourly Rate";

  var row2 = document.getElementById("rate");
  row2.innerHTML = "";
  var input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "hire-rate");
  input.setAttribute("id", "hire-rate");
  input.setAttribute("step", ".01");
  input.setAttribute("required", "");
  input.setAttribute("placeholder", "Rate..");
  row2.appendChild(input);
}

function COQ() {
  var row = document.getElementById("hire_rate");
  row.innerHTML = "";

  var row2 = document.getElementById("rate");
  row2.innerHTML = "";
}
