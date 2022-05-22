import Notiflix from 'notiflix';
import getRefs from '../refs/getRefs';
import registrationCheck from '../registrationСheck/registrationСheck';
const { loginForm } = getRefs();

const handleLoginForm = e => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (email === '' || password === '') {
    return Notiflix.Notify.info('Enter field');
  }

  registrationCheck(password);

  const formData = new FormData(loginForm);
  const body = {};

  formData.append('form', 'loginForm');

  formData.forEach((value, field) => {
    body[field] = value.trim();
  });

  loginForm.reset();
};
loginForm.addEventListener('submit', handleLoginForm);
