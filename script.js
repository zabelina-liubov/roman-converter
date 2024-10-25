const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const romans = [
  {arabic: 1000,
  roman: "M"},
  {arabic: 900,
  roman: "CM"},
  {arabic: 500,
  roman: "D"},
  {arabic: 400,
  roman: "CD"},
  {arabic: 100,
  roman: "C"},
  {arabic: 90,
  roman: "XC"},
  {arabic: 50,
  roman: "L"},
  {arabic: 40,
  roman: "XL"},
  {arabic: 10,
  roman: "X"},
  {arabic: 9,
  roman: "IX"},
  {arabic: 5,
  roman: "V"},
  {arabic: 4,
  roman: "IV"},
  {arabic: 1,
  roman: "I"}
];

const arabicToRoman = (input) => {
  let romanNumber = "";
  romans.forEach((obj) => {
    while (input >= obj.arabic) {
      input -= obj.arabic;
      romanNumber += obj.roman;
    }
  });
  return romanNumber;
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (numberInput.value == "") {
    result.textContent = "Please enter a valid number";
    numberInput.value = "";
    return;
  }
  if (inputInt <= 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
    numberInput.value = "";
    return;
  }
  if (inputInt >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
    numberInput.value = "";
    return;
  }

  result.textContent = arabicToRoman(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
