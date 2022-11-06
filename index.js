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
  let tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  let div = document.createElement("div");
  div.className = "textRow";
  div.appendChild(tooltip);
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
  document.getElementById("inputText").focus();

  const leftLastRow = ".inner_box.left > .row:last-child";
  const rightLastRow = ".inner_box.right > .row:last-child";

  let textOrigin = document.getElementById("inputText").value;
  if (textOrigin) {
    // CREATE ROWS
    getEl(".inner_box.right").appendChild(makeRow());
    getEl(".inner_box.left").appendChild(makeRow());
    rowCount++;
    div = makeTextDiv(rowCount);
    div.getElementsByClassName("text")[0].textContent = textOrigin;
    div.getElementsByClassName("tooltip")[0].textContent = textOrigin;
    divTranslit = makeTextDiv(rowCount);
    divTranslit.getElementsByClassName("text")[0].textContent =
      translit(textOrigin);
    divTranslit.getElementsByClassName("tooltip")[0].textContent =
      translit(textOrigin);
    getEl(leftLastRow).appendChild(div);
    getEl(rightLastRow).appendChild(divTranslit);
    getEl(leftLastRow).appendChild(makeImg());
    getEl(rightLastRow).appendChild(makeImg());
    updateNumbers();
    //clear input
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").focus();

    //tooltip
    document.querySelectorAll(".row").forEach((el, i) => {
      el.addEventListener("mouseover", (event) => {
        el.getElementsByClassName("tooltip")[0].style = "visibility: visible";
      });
    });

    document.querySelectorAll(".row").forEach((el) => {
      el.addEventListener("mouseout", (event) => {
        el.getElementsByClassName("tooltip")[0].style = "visibility: hidden";
      });
    });

    document.getElementById("btnClear").style.opacity = 1;

    //remove
    getEl(leftLastRow + " .del").addEventListener("click", function () {
      rowNum =
        event.target.parentElement.getElementsByClassName("num")[0].textContent;
      getEls(".inner_box.left .row")[rowNum - 1].remove();
      getEls(".inner_box.right .row")[rowNum - 1].remove();
      updateNumbers();
      document.getElementById("inputText").focus();
    });
    getEl(rightLastRow + " .del").addEventListener("click", function () {
      rowNum =
        event.target.parentElement.getElementsByClassName("num")[0].textContent;
      getEls(".inner_box.left .row")[rowNum - 1].remove();
      getEls(".inner_box.right .row")[rowNum - 1].remove();
      updateNumbers();
      document.getElementById("inputText").focus();
    });
  }
});

//hotkey
document.addEventListener("keydown", (even) => {
  if (event.key === "Enter") {
    document.getElementById("add").click();
  }
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
  document.getElementById("inputText").focus();
  document.getElementById("btnClear").style.opacity = 0.5;

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

//translitFunction
function translit(str) {
  obj = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "е",
    ж: "j",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "'",
    ы: "i",
    ь: "'",
    э: "e",
    ю: "u",
    я: "ya",
  };

  var regex = /^[!@#\$%\^\&*\)\(+=.:?><_-]/;
  var num = /^[0-9]+$/;

  arr = str.split("").map((i) => {
    if (i === " " || regex.test(i) || num.test(i)) {
      return i;
    }

    if (i.toUpperCase() === i) {
      return obj[i.toLowerCase()].toUpperCase();
    }

    return obj[i];
  });

  return arr.join("");
}
