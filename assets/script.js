var today = moment().format("dddd LL");
$("#currentDay").text(today);

// $("#currentDay").append(today);

// document.getElementById("currentDay").textContent = today;

// moment().hours()   === new Date().getHours();

// moment().seconds(30).valueOf() === new Date().setSeconds(30);

var now = new Date().getHours();

console.log(now);

console.log(localStorage.key(0));

var fantasy = window.localStorage.getItem("9am");

console.log(fantasy);

$(".9amRow").children("textarea").val(fantasy);



$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();

    var rowHourActive = $(this).siblings(".rowHour").text();

    window.localStorage.setItem(rowHourActive, notes);

});

// function statusTimeblock(){
// if (now === 9

// }


