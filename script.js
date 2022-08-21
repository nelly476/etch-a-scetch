for (let r = 0; r < 16; r++) {
  let x = document.getElementById("table").insertRow(r);
  for (let c = 0; c < 16; c++) {
    let y = x.insertCell(c);
  }
}

function createTable() {
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns");
  table.remove();
  for (let r = 0; r < parseInt(rn, 10); r++) {
    let x = document.getElementById("newTable").insertRow(r);
    for (let c = 0; c < parseInt(cn, 10); c++) {
      let y = x.insertCell(c);
    }
  }
  document.querySelectorAll("#newTable td").forEach((e) =>
    e.addEventListener("mouseover", function (e) {
      this.style.cssText = "background: black";
    })
  );
}

document.querySelectorAll("#table td").forEach((e) =>
  e.addEventListener("mouseover", function (e) {
    this.style.cssText = "background: black";
  })
);
