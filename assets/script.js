var today = moment().format("dddd [|] LL [| Week] W");

// you can also use $("#currentDay").append(today); OR document.getElementById("currentDay").textContent = today;
$("#currentDay").text(today);

// moment.js
var now = new Date().getHours();

var nineNote = window.localStorage.getItem("9am");
$(".9amRow").children("textarea").val(nineNote);

var tenNote = window.localStorage.getItem("10am");
$(".10amRow").children("textarea").val(tenNote);

var elevenNote = window.localStorage.getItem("11am");
$(".11amRow").children("textarea").val(elevenNote);

var twelveNote = window.localStorage.getItem("12pm");
$(".12pmRow").children("textarea").val(twelveNote);

var thirteenNote = window.localStorage.getItem("1pm");
$(".1pmRow").children("textarea").val(thirteenNote);

var fourteenNote = window.localStorage.getItem("2pm");
$(".2pmRow").children("textarea").val(fourteenNote);

var fifteenNote = window.localStorage.getItem("3pm");
$(".3pmRow").children("textarea").val(fifteenNote);

var sixteenNote = window.localStorage.getItem("4pm");
$(".4pmRow").children("textarea").val(sixteenNote);

var seventeenNote = window.localStorage.getItem("5pm");
$(".5pmRow").children("textarea").val(seventeenNote);

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings(".rowHour").text();
    window.localStorage.setItem(rowHourActive, notes);
});

// you can also use: var timeblocks = [].slice.call(timeblocksHTML);
var timeblocks = Array.from(document.getElementsByTagName('textarea'));

function statusTimeblock(){
    for (var i=0; i<timeblocks.length; i++) {
        var singleT = timeblocks[i];
        if (singleT.dataset.number == now) {
            singleT.classList.add("present");
        }
        if (singleT.dataset.number < now) {
            singleT.classList.add("past");
        }
        if (singleT.dataset.number > now) {
            singleT.classList.add("future");
        }  
    }  
}
statusTimeblock();



