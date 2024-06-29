document.addEventListener("DOMContentLoaded", function() {
  console.log("JS working");
})
  const form = document.getElementById("age-form");

  // get current date
  const currentDate = new Date();
  const currentYear = new Date().getFullYear();
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let invalidDate = "";

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dayLabel = document.getElementById('day-label');
    const monthLabel = document.getElementById('month-label');
    const yearLabel = document.getElementById('year-label');

    const dayValue = document.getElementById("day").value;
    const monthValue = document.getElementById("month").value;
    const yearValue = document.getElementById("year").value;

    const dayError = document.getElementById("day-error")
    const monthError = document.getElementById("month-error")
    const yearError = document.getElementById("year-error")

    // validation
    if (dayValue === "") {
      console.log("day is empty");
      dayError.classList.remove("hidden")
      dayError.innerHTML = "This field is required"
      dayInput.classList.add('red');
      dayLabel.classList.add('red');
      console.log("class added");
      invalidDate = false;
    } else if (!(dayValue >= 1 && dayValue <= 31)) {
      console.log("date is invalid");
      dayError.classList.remove("hidden")
      dayError.innerHTML = "Must be a valid day"
      dayInput.classList.add('red');
      dayLabel.classList.add('red');
      invalidDate = false;
      // check if day is bwtween 1 -30 when month is Feb, Apr, Jun, Sep Nov

      // advanced - check if selected year, selected day is available(ex.leap year. will work on later)
    } else {
      dayError.classList.add("hidden")
      dayInput.classList.remove('red');
      dayLabel.classList.remove('red');
      invalidDate = true;
    }

    if (monthValue === "") {
      console.log("month is empty");
      monthError.classList.remove("hidden")
      monthError.innerHTML = "This field is required"
      monthInput.classList.add('red');
      monthLabel.classList.add('red');
      invalidDate = false;
    } else if (!(monthValue >= 1 && monthValue <= 12)) {
      console.log("month is invalid");
      monthError.classList.remove("hidden")
      monthError.innerHTML = "Must be a valid month"
      monthInput.classList.add('red');
      monthLabel.classList.add('red');
      invalidDate = false;
      // check if day is bwtween 1 -30 when month is Feb, Apr, Jun, Sep Nov

      // advanced - check if selected year, selected day is available(ex.leap year. will work on later)
    } else {
      monthError.classList.add("hidden")
      monthInput.classList.remove('red');
      monthLabel.classList.remove('red');
      invalidDate = true;
    }

    if (yearValue === "") {
      console.log("year is empty");
      yearError.classList.remove("hidden")
      yearError.innerHTML = "This field is required"
      yearInput.classList.add('red');
      yearLabel.classList.add('red');
      invalidDate = false;
    } else if (yearValue > currentYear) {
      console.log("Year is invalid");
      yearError.classList.remove("hidden")
      yearError.innerHTML = "Must be a valid month"
      yearInput.classList.add('red');
      yearLabel.classList.add('red');
      invalidDate = false;
    } else {
      yearError.classList.add("hidden")
      yearInput.classList.remove('red');
      yearLabel.classList.remove('red');
      invalidDate = true;
    }

    console.log(typeof yearValue, "type of yearValue");

    // convert input strings to integers
    const yearNum = parseInt(yearValue);
    const monthNum = parseInt(monthValue);
    const dayNum = parseInt(dayValue);

    // get birthdate from input
    const targetDate = new Date(yearNum, monthNum -1, dayNum);

    // get the time which has passed from the input day
    const timeDifference = currentDate - targetDate;
    console.log(timeDifference);

    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const yearCount = Math.floor(dayDifference / 365)
    const monthCount = Math.floor(dayDifference % 365 / 31)
    const dayCount = Math.floor(dayDifference % 365 % 31)

    const dayDisplay = document.getElementById("day-display");
    const monthDisplay = document.getElementById("month-display");
    const yearDisplay = document.getElementById("year-display");

    if (invalidDate) {
      yearDisplay.innerHTML = yearCount;
      monthDisplay.innerHTML = monthCount;
      dayDisplay.innerHTML = dayCount;
    } else {
      yearDisplay.innerHTML = "--";
      monthDisplay.innerHTML = "--";
      dayDisplay.innerHTML = "--";
    }
  })
