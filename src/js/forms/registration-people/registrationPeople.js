import getRefs from '../../refs/getRefs';
import humanRegistrationFormProcessing from './humanRegistrationFormProcessing';
import previewFile from './previewFile';

const { containerForm } = getRefs();

function marcupPipleRegistration() {
  const marcupPeopleRegistrationForm = `
  <form class="form__people form__people--registr">
  <span class="form__svg-people"></span>
  <p class="form__description form__description--registration">
    Введіть будь ласка ваші дані нижче, щоб вам могли допомогти, або ваші друзі, родичі змогли
    вас відшукати. Дякуємо
  </p>
  <div class="form__download-wrap">
  <img class="form__download-photo" src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png" height="200" alt="Image preview...">
    <label class="form__download--label">
      <input class="form__download--input visually-hidden" type="file">
      <span class="form__svg-download download-img"></span>
      <p class="form__download-text">Завантажити фото .jpeg, .png, .gif</p>
    </label>
  </div>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="name"
      placeholder="Прізвище, Ім’я, по батькові"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="sity"
      placeholder="Область проживання"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="age"
      placeholder="Рік народження 01.01.2000"
    />
  </label>
  <label class="form__piople-label form__piople-label--margin">
    <textarea
      class="form__piople-input js-input"
      type="text"
      name="message"
      rows="6"
      placeholder="Залиште данi про ваше мiсце знаходження"
    ></textarea>
  </label>
  <button class="form__piople-btn form__piople-btn--yellow">Зареєструватись</button>
</form>
  `;

  containerForm.innerHTML = marcupPeopleRegistrationForm;

  const refsPipleRegistrationForm = {
    formPipleRegistrationForm: document.querySelector('.form__people--registr'),
    previewFileUserPhoto: document.querySelector('.form__download--input'),
    fieldsForm: document.querySelectorAll('.js-input'),
  };

  humanRegistrationFormProcessing(refsPipleRegistrationForm);
}

export default marcupPipleRegistration;
