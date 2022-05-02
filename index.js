// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit", myfunction);
var array1 = JSON.parse(localStorage.getItem("schedule")) || [];
function myfunction() {
  event.preventDefault();
  var dataone = {
    matnum: masaiForm.matchNum.value,
    teama: masaiForm.teamA.value,
    teamb: masaiForm.teamB.value,
    date: masaiForm.date.value,
    ven: masaiForm.venue.value,
  };
  array1.push(dataone);
  localStorage.setItem("schedule", JSON.stringify(array1));
}
