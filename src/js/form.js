const throttle = require("lodash.throttle");

const formRef = document.querySelector(".js-feedback-form");
let formData = {};
const LOCKSTORAGE_KEY = "feedback_form_message";

restartPage();

formRef.addEventListener("input",throttle(onFormInput, 500));
formRef.addEventListener("submit", onFormSubmit);

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
      const savedDataObj = JSON.parse(savedData);
      if (savedDataObj.message)
      {
        formRef.elements.message.value = savedDataObj.message;
        formData.message = savedDataObj.message;
      }
      if (savedDataObj.name) {
        formRef.elements.name.value = savedDataObj.name;
                formData.name = savedDataObj.name;
      }
      if (savedDataObj.check) {
        formRef.elements.check.checked = savedDataObj.check;
        formData.check = savedDataObj.check;
      }
    }
        
        
}
