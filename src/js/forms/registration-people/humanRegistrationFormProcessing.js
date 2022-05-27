import Notiflix from 'notiflix';
import previewFile from './previewFile';
import getRefs from '../../refs/getRefs';

const { overlay } = getRefs();

const humanRegistrationFormProcessing = refs => {
  const { formPipleRegistrationForm, previewFileUserPhoto, fieldsForm } = refs;

  previewFileUserPhoto.addEventListener('change', () => {
    previewFile();
  });

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
      photo: previewFile(),
      name: e.currentTarget.name.value,
      sity: e.currentTarget.sity.value,
      age: e.currentTarget.age.value,
      message: e.currentTarget.message.value,
    };

    console.log('body :>> ', body);

    overlay.classList.remove('active');
    formPipleRegistrationForm.reset();
  });
};

export default humanRegistrationFormProcessing;
