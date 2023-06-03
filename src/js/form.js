const throttle = require("lodash.throttle");

const refs = {
  message: document.querySelector("textarea"),
  form: document.querySelector(".js-feedback-form"),
};

let formData = {};
const LOCKSTORAGE_KEY = "feedback_form_message";
restartPage();

refs.form.addEventListener("input",throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
  localStorage.setItem(LOCKSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log('Відправив форму');
    e.target.reset();
    localStorage.removeItem(LOCKSTORAGE_KEY);
};

function restartPage() {
    const savedData = localStorage.getItem(LOCKSTORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        console.log(formData);
        console.dir(refs.form)
    }
        
        
}
