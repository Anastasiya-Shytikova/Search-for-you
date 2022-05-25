import Notiflix from 'notiflix';
import { signInOperation } from '../../service/authOperations';
import getRefs from '../../refs/getRefs';
import registrationCheck from '../../registrationСheck/registrationСheck';
const { loginForm } = getRefs();

const handleLoginForm = e => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (email === '' || password === '') {
    return Notiflix.Notify.info('Enter field');
  }

  registrationCheck(password);

  const body = {
    email,
    password,
  };

  signInOperation(body);

  loginForm.reset();
};
loginForm.addEventListener('submit', handleLoginForm);
