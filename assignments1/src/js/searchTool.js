//the second part=Contact Search Tool
import { contacts } from "../data/contacts.js";
const data = contacts.results;
const submitForm = document.querySelector(".contact-form");
const contactContainer = document.querySelector(".contact-container");

function searchContact() {
  const inputValue = document.getElementById("input-contact").value.trim();
  if (typeof inputValue === "string") {
    const firstName = data.find(
      (element) => element.name.first.toLowerCase() === inputValue.toLowerCase()
    );
    const lastName = data.find(
      (element) => element.name.last.toLowerCase() === inputValue.toLowerCase()
    );
    firstName ? renderContact(firstName) : renderContact(lastName);
  } else if (typeof inputValue === "number") {
    const number = data.find(
      (element) => element.name.last.toLowerCase() === inputValue.toLowerCase()
    );
    renderContact(number);
  } else {
    console.log("Wrong value, input name or number");
  }
}

function renderContact(contact) {
  const contactLine = document.createElement("div");
  contactLine.innerHTML = `<p>${contact.name.first} ${contact.name.last}</p>
  <p>Phone number: ${contact.phone}</p> 
  <p>Email: ${contact.email}</p>`;
  contactLine.classList.add("contact-item");
  contactContainer.append(contactLine);
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchContact();
});
