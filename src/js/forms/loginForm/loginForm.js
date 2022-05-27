import { signInOperation } from '../../service/authOperations';
import getRefs from '../../refs/getRefs';
import validateEmail from '../validateEmail/validateEmail';
const { loginForm, formInputEmail } = getRefs();

const handleLoginForm = e => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const formInputs = loginForm.querySelectorAll('.form__input');
  const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(input => {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    return;
  }

  if (!validateEmail(email)) {
    formInputEmail.classList.add('error');
    return;
  } else {
    formInputEmail.classList.remove('error');
  }

  const body = {
    email: email,
    password: e.currentTarget.password.value,
  };

  signInOperation(body);

  loginForm.reset();
};
loginForm.addEventListener('submit', handleLoginForm);
