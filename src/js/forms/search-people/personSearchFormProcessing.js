import phoneNumberMask from './phoneNumberMask';
import getRefs from '../../refs/getRefs';

const { overlay } = getRefs();

const personSearchFormProcessing = refs => {
  const { formPipleRegistrationForm, telephoneInput, fieldsForm } = refs;

  function validateNumberToInput() {
    telephoneInput.addEventListener('input', e => {
      let input = e.target;
      if (input.value[0] === '0') {
        phoneNumberMask(telephoneInput);
        return;
      } else {
        const value = input.value.replace(/[^\d]/g, '');
        input.value = value;
      }
    });
  }

  validateNumberToInput();

  formPipleRegistrationForm.addEventListener('submit', e => {
    e.preventDefault();

    let emptyField = Array.from(fieldsForm).filter(input => input.value === '');

    fieldsForm.forEach(field => {
      if (field.value === '') {
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });

    if (emptyField.length !== 0) {
      return;
    }

    const body = {
      name: e.currentTarget.name.value,
      sity: e.currentTarget.sity.value,
      age: e.currentTarget.age.value,
      tel: e.currentTarget.tel.value,
    };

    overlay.classList.remove('active');
    formPipleRegistrationForm.reset();
  });
};

export default personSearchFormProcessing;
