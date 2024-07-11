"use strict";

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const message = document.getElementById("message");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  //validate email
  const emailInput = email.value.trim();

  if (emailInput) {
    email.classList.remove("invalid");
    email.classList.add("active");
    email.classList.remove("active");
    console.log("welcome");
  }
});
