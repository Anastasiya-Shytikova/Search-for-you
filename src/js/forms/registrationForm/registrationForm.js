import Notiflix from 'notiflix';
import { signUpOperation } from '../../service/authOperations';
import validateEmail from '../validateEmail/validateEmail';
import getRefs from '../../refs/getRefs';

const { registrationForm, checkbox, registrationBtn, formErrorPassword, formInputEmailReg } =
  getRefs();

const passwordComparison = e => {
  const password = e.currentTarget.password.value;
  const repeatPassword = e.currentTarget.repeatPassword.value;

  if (password === repeatPassword) {
    return true;
  }
  return false;
};

const handleRegistrationForm = e => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const formInputs = registrationForm.querySelectorAll('.form__input');
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

  if (!passwordComparison(e)) {
    formErrorPassword.classList.remove('visually-hidden');
    return;
  }

  if (!validateEmail(email)) {
    formInputEmailReg.classList.add('error');
    return;
  } else {
    formInputEmailReg.classList.remove('error');
  }

  const body = {
    email: email,
    password: e.currentTarget.password.value,
  };

  signUpOperation(body);

  registrationForm.reset();
};

checkbox.addEventListener('change', () => {
  registrationBtn.toggleAttribute('disabled');
  registrationBtn.classList.toggle('disabled');
});

registrationForm.addEventListener('submit', handleRegistrationForm);
