import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('label [name="email"]');
const messageElement = document.querySelector('label [name="message"]');

formElement.addEventListener('input', throttle(eventOnInput, 500));
function eventOnInput() {
  const email = emailElement.value;
  const message = messageElement.value;

  const currentFormData = {
    email,
    message,
  };
  console.log(currentFormData);
  const currentFormDataJSON = JSON.stringify(currentFormData);

  localStorage.setItem('feedback-form-state', currentFormDataJSON);
}

formElement.addEventListener('submit', sendSubmit);
function sendSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Toate radurile trebuie completate!');
  }

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

eventOnReload();
function eventOnReload() {
  let formLoad = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formLoad) {
    emailElement.value = formLoad.email;
    messageElement.value = formLoad.message;
  }
}
