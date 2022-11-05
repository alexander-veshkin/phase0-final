let title = document.getElementById("title");
let dotTitile = title.textContent
  .split("")
  .map((i) => i + ".")
  .join("")
  .toUpperCase();
title.textContent = dotTitile;

const makeRow = () => {
  let row = document.createElement("div");
  row.className = "row";
  return row;
};

const makeSpan = (count) => {
  let span = document.createElement("span");
  span.className = "num";
  span.textContent = count;
  return span;
};

const getEl = (s) => {
  return document.querySelectorAll(s)[0];
};

const getEls = (s) => {
  return document.querySelectorAll(s);
};

let rowCount = 1;

document.getElementById("add").addEventListener("click", function () {
  let text = document.getElementById("inputText").value;
  getEl(".inner_box.right").appendChild(makeRow());
  getEl(".inner_box.left").appendChild(makeRow());
  rowCount++;
  console.log(makeSpan(rowCount));
});
