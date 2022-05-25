import Notiflix from 'notiflix';
import getRefs from '../../refs/getRefs';

const { overlay } = getRefs();

const personSearchFormProcessing = ({ formPipleRegistrationForm }) => {
  formPipleRegistrationForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const sity = e.currentTarget.sity.value;
    const age = e.currentTarget.age.value;
    const contact = e.currentTarget.contacts.value;

    if (name === '' || sity === '' || age === '' || contact === '') {
      return Notiflix.Notify.failure('No field');
    }

    const body = {
      name,
      sity,
      age,
      contact,
    };

    overlay.classList.remove('active');
    formPipleRegistrationForm.reset();
  });
};

export default personSearchFormProcessing;
