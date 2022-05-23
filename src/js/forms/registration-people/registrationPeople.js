function marcupPipleRegistration() {
  return `
  <form class="form__people form__people--registr">
  <span class="form__svg-people"></span>
  <p class="form__description form__description--registration">
    Введіть будь ласка ваші дані нижче, щоб вам могли допомогти, або ваші друзі, родичі змогли
    вас відшукати. Дякуємо
  </p>
  <div class="form__download-wrap">
    <span class="form__svg-download"></span>
    <p class="form__download-text">Завантажити фото .jpeg, .png, .tiff</p>
  </div>
  <label class="form__piople-label">
    <input
      class="form__piople-input"
      type="text"
      name="name"
      placeholder="Прізвище, Ім’я, по батькові"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input"
      type="text"
      name="sity"
      placeholder="Область проживання"
    />
  </label>
  <label class="form__piople-label">
    <input
      class="form__piople-input"
      type="text"
      name="age"
      placeholder="Рік народження"
    />
  </label>
  <label class="form__piople-label form__piople-label--margin">
    <textarea
      class="form__piople-input"
      type="text"
      name="textarea"
      rows="6"
      placeholder="Залиште данi про ваше мiсце знаходження"
    ></textarea>
  </label>
  <button class="form__piople-btn form__piople-btn--yellow">Зареєструватись</button>
</form>
  `;
}

export default marcupPipleRegistration;
