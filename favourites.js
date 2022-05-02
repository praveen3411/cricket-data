// write js code here corresponding to favourites.html

var array2 = JSON.parse(localStorage.getItem("favourites")) || [];

calltwo(array2);

function calltwo(data) {
  data.forEach(function (ele, index) {
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
    td6.innerText = "Remove";
    td6.style.color = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      remo(ele, index);
    });

    box.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(box);
  });

  function remo(ele, index) {
    array2.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(array2));
    window.location.reload();
  }
}
