// Select DOM Elements
const copyYear = document.querySelector(".copy-year");
const nav = document.querySelector(".nav");
const donatorCash = document.querySelectorAll(".donator-cash");
const quoteContainer = document.querySelector(".quote");

// Update copyright year
const updateCopyrightYear = function () {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Append the year to the UI
  copyYear.textContent = currentYear;
};

updateCopyrightYear();

// Fixed navigation bar
const fixedNavigationBar = function () {
  // Calculate heights
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
  // Add the 'fixed' class
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};

window.addEventListener("scroll", fixedNavigationBar);

// Number format
const donations = [34500, 12400, 54250, 66000];
const numberFormat = function (num) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};

donatorCash.forEach(function (cash, i, arr) {
  const formattedNumber = numberFormat(donations[i]);
  cash.textContent = formattedNumber;
});

// Update random quotes
const randomQuoteGenerator = async function () {
  try {
    // Get the response from the server
    const response = await fetch("https://type.fit/api/quotes");
    // Throw an error if encountered
    if (!response.ok) throw new Error("Please check your internet connection!");
    // Convert the data into json format
    const result = await response.json();
    // Get a copy of the array
    const data = result.slice(0, 500);
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * data.length) + 1;
    // Get a random quote from the array
    const randomQuote = result[randomNumber];
    // Create a markup dynamically
    let html = "";
    if (randomQuote.author === null) {
      html = `
            <p class="quote-text">&#8220;${randomQuote.text}&#8221;</p>
            <h4 class="quote-title">Joel Nambala</h4>
        `;
    } else {
      html = `
        <p class="quote-text">&#8220;${randomQuote.text}&#8221;</p>
        <h4 class="quote-title">${randomQuote.author}</h4>
    `;
    }
    // Append the data to the UI
    quoteContainer.insertAdjacentHTML("beforeend", html);
    console.log(randomQuote);
  } catch (err) {
    console.error(`${err.message} ⚡⚡⚡`);
    quoteContainer.textContent = err.message;
  }
};

randomQuoteGenerator();
