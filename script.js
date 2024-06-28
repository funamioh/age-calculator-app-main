document.addEventListener("DOMContentLoaded", function() {
  console.log("JS working");
})
  const form = document.getElementById("age-form");

  // get current date
  const currentDate = new Date();
  const currentYear = new Date().getFullYear();
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const day = document.getElementById("day");
    const dayValue = day.value;

    const month = document.getElementById("month");
    const monthValue = month.value;

    const year = document.getElementById("year");
    const yearValue = year.value;

    const dayError = document.getElementById("day-error")
    const monthError = document.getElementById("month-error")
    const yearError = document.getElementById("year-error")

    // add class name hidden to ALL error-message element
    // if (day !== "" && month !== "" && year !== "") {
    //   const errorMessages = document.querySelectorAll(".error-message");
    //   errorMessages.forEach((errorMessage) => {
    //     errorMessage.classList.add("hidden")
    //   })
    // } else {

    // }

    if (dayValue === "") {
      console.log("day is empty");
      // errorだったらhiddenを外す。デフォルトはhidden
      dayError.classList.remove("hidden")
      dayError.innerHTML = "This field is required"
    } else if (!(dayValue >= 1 && dayValue <= 31)) {
      console.log("date is invalid");
      dayError.classList.remove("hidden")
      dayError.innerHTML = "Must be a valid day"
      // check if day is between 1 - 31
      // check if day is bwtween 1 -30 when month is Feb, Apr, Jun, Sep Nov

      // advanced - check if selected year, selected day is available(ex.leap year. will work on later)
    } else {
      dayError.classList.add("hidden")
    }

    if (monthValue === "") {
      console.log("month is empty");
      monthError.classList.remove("hidden")
      monthError.innerHTML = "This field is required"
    } else if (!(monthValue >= 1 && monthValue <= 12)) {
      console.log("month is invalid");
      monthError.classList.remove("hidden")
      monthError.innerHTML = "Must be a valid month"
      // check if day is between 1 - 31
      // check if day is bwtween 1 -30 when month is Feb, Apr, Jun, Sep Nov

      // advanced - check if selected year, selected day is available(ex.leap year. will work on later)
    } else {
      monthError.classList.add("hidden")
    }

    if (yearValue === "") {
      console.log("year is empty");
      yearError.classList.remove("hidden")
      yearError.innerHTML = "This field is required"
    } else if (yearValue > currentYear) {
      console.log("Year is invalid");
      yearError.classList.remove("hidden")
      yearError.innerHTML = "Must be a valid month"
    } else {
      yearError.classList.add("hidden")
    }

    console.log(typeof yearValue, "type of yearValue");

    // get birthdate from the input
    // convert input strings to integers

    const yearNum = parseInt(yearValue);
    const monthNum = parseInt(monthValue);
    const dayNum = parseInt(dayValue);

    const targetDate = new Date(yearNum, monthNum -1, dayNum);

    const timeDifference = currentDate - targetDate;
    console.log(timeDifference);

    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    // const yearDifference =

    // how to count age in years and months and days?
    // -> couont the number of days from the birthday and current day
    // get the remaining number of days by % 365 -> number of months
    // get the remaining number of days by % 12 -> number of days

    // const ageInDays = currentDate - birthDate

    const dayDisplay = document.getElementById("day-display");
    const monthDisplay = document.getElementById("month-display");
    const yearDisplay = document.getElementById("year-display");

    dayDisplay.innerHTML = dayDifference

    // the following code is for testing purpose
    yearDisplay.innerHTML = yearValue;
    monthDisplay.innerHTML = monthValue;
    // dayDisplay.innerHTML = dayValue;

    console.log("submit form");
  })
