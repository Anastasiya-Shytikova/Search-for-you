import Notiflix from 'notiflix';
import getRefs from '../refs/getRefs';
import { KEY_LOGIN } from '../helpers/helpers';

const { registrationForm, checkbox, registrationBtn, formErrorPassword } = getRefs();

const handleRegistrationForm = e => {
  e.preventDefault();

  const name = e.currentTarget.name.value;
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;
  const repeatPassword = e.currentTarget.repeatPassword.value;

  if (name === '' || email === '' || password === '') {
    return Notiflix.Notify.info('Enter field');
  }

  if (password !== repeatPassword) {
    formErrorPassword.classList.remove('visually-hidden');
    return;
  }

  const formData = new FormData(registrationForm);
  const body = {};

  formData.append('form', 'registrationForm');

  formData.forEach((value, field) => {
    body[field] = value.trim();
  });

  localStorage.setItem(KEY_LOGIN, JSON.stringify(body));

  registrationForm.reset();
};

checkbox.addEventListener('change', () => {
  registrationBtn.toggleAttribute('disabled');
  registrationBtn.classList.toggle('disabled');
});

registrationForm.addEventListener('submit', handleRegistrationForm);
