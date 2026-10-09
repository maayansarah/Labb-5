"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Maayan Grolman
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
  // Kontrollera formulärets obligatoriska fält
  // Visa eventuella felmeddelanden
  // Returnera resultatet (true eller false) av valideringen
  console.log("Validerar formulär");

  //Tömmer arrayen
  errors = [];

  const fullnameInputValue = fullnameInput.value.trim();
  if (fullnameInputValue === "") {
    errors.push("Du måste ange ditt fullständiga namn");
  }

  const emailInputValue = emailInput.value.trim();
  if (emailInputValue === "") {
    errors.push("Du måste ange din e-postadress");
  }

  const phoneInputValue = phoneInput.value.trim();
  if (phoneInputValue === "") {
    errors.push("Du måste ange ditt telefonnummer");
  }

  const fontSelectValue = fontSelect.value.trim();
  if (fontSelectValue) {
  }

  displayErrors();
  if (errors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
  // Rensa tidigare felmeddelanden
  // Skriv ut aktuella felmeddelanden till DOM
  console.log("Visar felmeddelanden");

  errorList.innerHTML = "";

  for (let i = 0; i < errors.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = errors[i];
    errorList.appendChild(liEl);
  }
}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
  // Hämta information från formuläret
  // Uppdatera studentkortet
  // Lägg till studentkortet i historiken
  // Spara och uppdatera historiken
  console.log("Skapar studentkort");
}

/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
  // Spara history i localStorage
  console.log("Sparar historik");
}

/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
  // Hämta eventuell sparad historik
  // Uppdatera history
  console.log("Läser in historik");
}

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
  // Rensa tidigare visad historik
  // Skriv ut innehållet i history till DOM
  console.log("Visar historik");
}

/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
  // Återställ formulär och studentkort
  // Rensa eventuella felmeddelanden
  console.log("Rensar formulär");
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
  // Radera sparad historik
  // Uppdatera history och visningen på sidan
  console.log("Raderar historik");
}

// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    createStudentCard();
  }
});

// När användaren klickar på "Rensa"
clearButton.addEventListener("click", clearForm);

// När användaren klickar på "Radera historik"
deleteHistoryButton.addEventListener("click", deleteHistory);

// När sidan laddas:
// - läs in och visa eventuell tidigare historik
window.addEventListener("load", loadHistory);
