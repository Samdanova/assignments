//the second part=Contact Search Tool
// import { contacts } from "../data/contacts.js";

async function getData() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log("error", error);
  }
}
const submitForm = document.querySelector(".contact-form");
const contactContainer = document.querySelector(".contact-container");

async function searchContact() {
  const data = await getData();
  const inputValue = document.getElementById("input-contact").value.trim();
  const phoneNumber = parseInt(inputValue.replace(/\D/g, ""));

  if (!isNaN(phoneNumber)) {
    // checked either phone is number
    const contact = data.find(
      (element) => normalNumber(element.phone) === normalNumber(inputValue)
    );
    contact ? renderContact([contact]) : generateError();
  } else {
    // if not, we find by name
    const name = data.filter(
      (element) =>
        element.name.first.toLowerCase().includes(inputValue.toLowerCase()) ||
        element.name.last.toLowerCase().includes(inputValue.toLowerCase())
    );
    name.length ? renderContact(name) : generateError();
  }
}

function renderContact(contacts) {
  //clean the data
  document.getElementById("input-contact").value = "";
  contactContainer.innerHTML = "";
  //display contact
  contacts.forEach((element) => {
    const contactLine = document.createElement("div");
    contactLine.innerHTML = `<p>${element.name.first} ${element.name.last}</p>
    <p>Phone number: ${element.phone}</p> 
    <p>Email: ${element.email}</p>`;
    contactLine.classList.add("contact-item");
    contactContainer.append(contactLine);
  });
}

function generateError() {
  //clean the data
  document.getElementById("input-contact").value = "";
  contactContainer.innerHTML = "";
  //create a message for error
  const errorDiv = document.createElement("div");
  errorDiv.textContent =
    "Try one more time please. You don't have a contact with such name or number";
  errorDiv.className = "error-text";
  contactContainer.append(errorDiv);
}

function normalNumber(phoneNumber) {
  return phoneNumber.replace(/\D/g, "");
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchContact();
});
