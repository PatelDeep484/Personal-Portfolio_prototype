/**
 * WEB222 – Final Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *
 *      Name:       DEEP PATEL
 *      Student ID: 151376217
 *      Email:      dpatel425@myseneca.ca
 *      Section:    NEE
 *      Date:       12/08/2022
 */

function validate() {
  if (
    /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(
      document.getElementById("form").email.value
    )
  ) {
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
  alert("Invalid email address!");
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

function CommentOrQuestion() {
  var row = document.getElementById("hire_rate");
  row.innerHTML = "";

  var row2 = document.getElementById("rate");
  row2.innerHTML = "";
}
