import Notiflix from 'notiflix';
import downloadPhotoUser from './downloadPhotoUser';
import getRefs from '../../refs/getRefs';

const humanRegistrationFormProcessing = refs => {
  const { formPipleRegistrationForm, downloadImg } = refs;

  formPipleRegistrationForm.addEventListener('submit', e => {
    e.preventDefault();
    const photo = downloadPhotoUser(downloadImg);
    const name = e.currentTarget.name.value;
    const sity = e.currentTarget.sity.value;
    const age = e.currentTarget.age.value;
    const message = e.currentTarget.contacts.value;

    if (name === '' || sity === '' || age === '') {
      return Notiflix.Notify.failure('No field');
    }

    const body = {
      photo,
      name,
      sity,
      age,
      message,
    };

    overlay.classList.remove('active');
    formPipleRegistrationForm.reset();
  });
};

export default humanRegistrationFormProcessing;
