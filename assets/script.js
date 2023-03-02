// Code wrap
$(document).ready(function () {
  // Save button local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];

    console.log(text, time);

    localStorage.setItem(time, text);
  });

  //Show current date in header
  var today = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(today);
  console.log(today);

  // Past, present, future
  var currentTime = dayjs().format('h');
  console.log(currentTime);

  $(".row").each(function () {
    var hours = parseInt($(this).attr("id").split("-")[1]);
    console.log(everyHour, currentTime);

    if (hours < currentTime) {
      $(this).addClass('past')

    } else if (hours === currentTime) {
      $(this).addClass('present')
    }
    else {
      $(this).addClass('future')
    }
  });

  // User input from local storage
  $("#hour-9").val(localStorage.getItem("9"));
  $("#hour-10").val(localStorage.getItem("10"));
  $("#hour-11").val(localStorage.getItem("11"));
  $("#hour-12").val(localStorage.getItem("12"));
  $("#hour-1").val(localStorage.getItem("1"));
  $("#hour-2").val(localStorage.getItem("2"));
  $("#hour-3").val(localStorage.getItem("3"));
  $("#hour-4").val(localStorage.getItem("4"));
  $("#hour-5").val(localStorage.getItem("5"));
});