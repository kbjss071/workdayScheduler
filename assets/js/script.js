const currentDay = document.getElementById("currentDay");

var today = moment().format("dddd, MMMM Do");

currentDay.textContent = today;