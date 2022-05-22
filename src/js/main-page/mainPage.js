import getRefs from '../refs/getRefs';

const { root } = getRefs();

export const marcupMainPage = () => {
  const mainPage = `<section class="section section__main">
    <div class="main__wrapper">
    <div class="main__content main__search">
      <span class="coat-of-arms coat-of-arms-yellow"></span>
      <span class="main__svg main__svg-search"></span>
      <h2 class="main__title main__title--blue">Я шукаю рідних</h2>
      <button class="login__btn main__btn main__btn--blue" type="button">Знайти</button>
    </div>
    <div class="main__content main__registration">
      <span class="coat-of-arms coat-of-arms-blue"></span>
        <span class="main__svg main__svg-people"></span>
        <h2 class="main__title main__title--yellow">Я примусово депортований</h2>
        <button class="login__btn main__btn main__btn--yellow" type="button">Зареєструватись</button>
      </div>
    </div>
  </section>`;
  root.innerHTML = mainPage;
};
