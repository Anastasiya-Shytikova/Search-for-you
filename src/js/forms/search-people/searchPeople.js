import getRefs from '../../refs/getRefs';
import personSearchFormProcessing from './personSearchFormProcessing';

const { containerForm } = getRefs();

function marcupPeopleSearch() {
  const marcupPeopleSearchForm = `
  <form class="form__people form__people--search" data-search-form>
  <span class="form__svg-search"></span>
  <p class="form__description form__description--search">
    Вітаємо! Ви успішно пройшли верифікацію! Заповніть будь ласка усі поля нижче, щоб
    розпочати пошук.
  </p>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="name"
      placeholder="Прізвище, Ім’я, по батькові розшукуваної особи"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="sity"
      placeholder="Область проживання розшукуваної особи"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input js-input"
      type="text"
      name="age"
      placeholder="Рік народження розшукуваної особи 01.01.2001"
    />
  </label>
  <label class="form__piople-label form__piople-label--margin">
  <input
    class="form__piople-input js-input js-input-phone"
    type="tel"
    name="tel"
    maxlength="18"
    placeholder="Контактний номер телефону для зв'язку (050) 222-22-22"
  />
</label>
  <button class="form__piople-btn form__piople-btn--blue">Знайти</button>
</form>
`;

  containerForm.innerHTML = marcupPeopleSearchForm;

  const refsPipleSearchForm = {
    formPipleRegistrationForm: document.querySelector('[data-search-form]'),
    telephoneInput: document.querySelector('.js-input-phone'),
    fieldsForm: document.querySelectorAll('.js-input'),
  };

  personSearchFormProcessing(refsPipleSearchForm);
}

export default marcupPeopleSearch;
