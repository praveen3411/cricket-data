// write js code here corresponding to matches.html

var array1 = JSON.parse(localStorage.getItem("schedule")) || [];
var array2 = JSON.parse(localStorage.getItem("favourites")) || [];
callone(array1);

function callone(data) {
  data.forEach(function (ele) {
    var box = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = ele.matnum;

    var td2 = document.createElement("td");
    td2.innerText = ele.teama;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamb;

    var td4 = document.createElement("td");
    td4.innerText = ele.date;

    var td5 = document.createElement("td");
    td5.innerText = ele.ven;

    var td6 = document.createElement("td");
    td6.innerText = "Favorites";
    td6.style.backgroundColor = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      favor(ele);
    });

    box.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(box);
  });

  function favor(ele) {
    array2.push(ele);
    localStorage.setItem("favourites", JSON.stringify(array2));
  }
}
