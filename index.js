//make titile
let title = document.getElementById("title");
let dotTitile = title.textContent
  .split("")
  .map((i) => i + ".")
  .join("")
  .toUpperCase();
title.textContent = dotTitile;

//make elements
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

const makeImg = () => {
  let img = document.createElement("img");
  img.className = "del";
  img.src = "./icons/sf.svg";
  img.alt = "del";
  return img;
};

//getters
const getEl = (s) => {
  return document.querySelectorAll(s)[0];
};

const getEls = (s) => {
  return document.querySelectorAll(s);
};

let rowCount = 1;

//ADD Button
document.getElementById("add").addEventListener("click", function () {
  let text = document.getElementById("inputText").value;
  getEl(".inner_box.right").appendChild(makeRow());
  getEl(".inner_box.left").appendChild(makeRow());
  rowCount++;
  getEl(".inner_box.left > .row:last-child").appendChild(makeSpan(rowCount));
  getEl(".inner_box.right > .row:last-child").appendChild(makeSpan(rowCount));
  getEl(".inner_box.left > .row:last-child").appendChild(makeImg());
  getEl(".inner_box.right > .row:last-child").appendChild(makeImg());
});

//CLEAR ALL Button
document.getElementById("btnClear").addEventListener("click", function () {
  getEls(".inner_box.left > .row").forEach((el, i) => {
    if (i) {
      el.remove();
    }
  });
  getEls(".inner_box.right > .row").forEach((el, i) => {
    if (i) {
      el.remove();
    }
  });

  document.getElementById("inputText").value = "";

  rowCount = 1;
});
