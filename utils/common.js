export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatNumberToTwoDigit(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

export function formatINR(value) {
  const options = {
    style: "currency",
    currency: "INR",
  };
  return value?.toLocaleString("en-IN", options);
}

export function formatNumberCommaSeparated(number) {
  return new Intl.NumberFormat().format(number);
}

export function blockPageScroll() {
  document.getElementById("body").classList.add("h-screen", "overflow-hidden");
}

export function unBlockPageScroll() {
  document
    .getElementById("body")
    .classList.remove("h-screen", "overflow-hidden");
}
