// Question-1
function calculateMoney(ticketSale) {
  if (typeof ticketSale !== "number" || ticketSale < 0) {
    return `Please provide a number`;
  }
  const perTicketPrice = 120;
  const fixedCost = 500 + 8 * 50;
  const remainingAmount = ticketSale * perTicketPrice - fixedCost;
  return remainingAmount;
}

// Question-2
function checkName(name) {
  if (typeof name !== "string") {
    return `invalid`;
  }
  let nameNew = name.toLowerCase();
  let letters = nameNew.split("");
  let lastIndex = letters.length - 1;
  if (
    letters[lastIndex] === "a" ||
    letters[lastIndex] === "y" ||
    letters[lastIndex] === "i" ||
    letters[lastIndex] === "e" ||
    letters[lastIndex] === "o" ||
    letters[lastIndex] === "u" ||
    letters[lastIndex] === "w"
  ) {
    return `Good Name`;
  } else {
    return `Bad Name`;
  }
}

//  Question-3
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return `Invalid Array`;
  }
  let item = [];
  for (let number of array) {
    if (typeof number === "number" && number / 1 === number) {
      item.push(number);
    }
  }
  return item;
}

//  Question-4
function password(obj) {
  if (typeof obj !== "object") {
    return `invalid`;
  } else if (
    typeof obj.name !== "string" ||
    typeof obj.birthYear !== "number" ||
    typeof obj.siteName !== "string"
  ) {
    return `invalid`;
  }
  let year = `${obj.birthYear}`;
  if (year.length !== 4) {
    return `invalid`;
  }
  let name = obj.name;
  let nameNew = name.toLowerCase();
  let site = obj.siteName;
  let siteNew = site[0].charAt(0).toUpperCase() + site.slice(1).toLowerCase();
  let pass = `${siteNew}#${nameNew}@${obj.birthYear}`;
  return pass;
}

//  Question-5
function monthlySavings(income, livingCost) {
  if (!Array.isArray(income) || typeof livingCost !== "number") {
    return `invalid input`;
  }
  let total = 0;
  for (let amt of income) {
    if (typeof amt !== "number") {
      return `invalid input`;
    } else if (amt >= 3000) {
      amt = amt - (amt * 20) / 100;
      total = total + amt;
    } else {
      total = total + amt;
    }
  }
  let savings = total - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return `earn more`;
  }
}
