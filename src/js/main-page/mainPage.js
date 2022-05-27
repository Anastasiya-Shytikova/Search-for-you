import getRefs from '../refs/getRefs';
import marcupPeopleSearch from '../forms/search-people/searchPeople';
import marcupPipleRegistration from '../forms/registration-people/registrationPeople';
import { handleCloseModalEsc } from '../modal/modalClose';

const { root, overlay } = getRefs();

export const marcupMainPage = () => {
  const mainPage = `<section class="section section__main">
    <div class="main__wrapper">
    <div class="main__content main__search">
      <span class="coat-of-arms coat-of-arms-yellow"></span>
      <span class="main__svg main__svg-search"></span>
      <h2 class="main__title main__title--blue">Я шукаю рідних</h2>
      <button class="login__btn main__btn main__btn--blue" type="button" data-search>Знайти</button>
    </div>
    <div class="main__content main__registration">
      <span class="coat-of-arms coat-of-arms-blue"></span>
        <span class="main__svg main__svg-people"></span>
        <h2 class="main__title main__title--yellow">Я примусово депортований</h2>
        <button class="login__btn main__btn main__btn--yellow" type="button" data-registr>Зареєструватись</button>
      </div>
    </div>
  </section>`;
  root.innerHTML = mainPage;

  const searchBtn = document.querySelector('[data-search]');
  const registrBtn = document.querySelector('[data-registr]');

  searchBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    marcupPeopleSearch();
    window.addEventListener('keydown', handleCloseModalEsc);
  });

  registrBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    marcupPipleRegistration();
    window.addEventListener('keydown', handleCloseModalEsc);
  });
};
