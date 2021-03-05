var today = moment().format("dddd LL");
$("#currentDay").text(today);

// $("#currentDay").append(today);

// document.getElementById("currentDay").textContent = today;

// moment().hours()   === new Date().getHours();

// moment().seconds(30).valueOf() === new Date().setSeconds(30);

var now = new Date().getHours(); 

// document.getElementsByClass("button").addEventListener("click", function(){

// });
var str = localStorage.getItem("9am");
str

$(".button").on("click", function(){
var textG = $(this).siblings("textarea").val();

var textT = $(this).siblings(".assignedTime").text();
localStorage.setItem(textT, textG);


});


