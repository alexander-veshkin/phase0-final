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

const makeTextDiv = (count) => {
  let spanText = document.createElement("span");
  spanText.className = "text";
  let spanNum = document.createElement("span");
  spanNum.className = "num";
  spanNum.textContent = count;
  span = spanText.appendChild(spanNum);
  let div = document.createElement("div");
  div.className = "textRow";
  div.appendChild(spanNum);
  div.appendChild(spanText);
  return div;
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

//ADD Button
let rowCount = 1;
document.getElementById("add").addEventListener("click", function () {
  const leftLastRow = ".inner_box.left > .row:last-child";
  const rightLastRow = ".inner_box.right > .row:last-child";

  let textOrigin = document.getElementById("inputText").value;
  // CREATE ROWS
  getEl(".inner_box.right").appendChild(makeRow());
  getEl(".inner_box.left").appendChild(makeRow());
  rowCount++;
  div = makeTextDiv(rowCount);
  div.getElementsByClassName("text")[0].textContent = textOrigin;
  getEl(leftLastRow).appendChild(div);
  getEl(rightLastRow).appendChild(makeTextDiv(rowCount));
  getEl(leftLastRow).appendChild(makeImg());
  getEl(rightLastRow).appendChild(makeImg());
  // getEl(leftLastRow).appendChild(makeImg());
  updateNumbers();

  getEl(leftLastRow + " .del").addEventListener("click", function () {
    rowNum =
      event.target.parentElement.getElementsByClassName("num")[0].textContent;
    getEls(".inner_box.left .row")[rowNum - 1].remove();
    getEls(".inner_box.right .row")[rowNum - 1].remove();
    updateNumbers();
  });
  getEl(rightLastRow + " .del").addEventListener("click", function () {
    rowNum = event.target.parentElement.textContent;
    getEls(".inner_box.left .row")[rowNum - 1].remove();
    getEls(".inner_box.right .row")[rowNum - 1].remove();
    updateNumbers();
  });
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

//update numbers
function updateNumbers() {
  leftRows = document.querySelectorAll(".inner_box.left > .row");
  rightRows = document.querySelectorAll(".inner_box.right > .row");
  rowNum = leftRows.length;

  rightRows.forEach((el, i) => {
    el.getElementsByClassName("num")[0].textContent = i + 1;
  });

  leftRows.forEach((el, i) => {
    el.getElementsByClassName("num")[0].textContent = i + 1;
  });
}
