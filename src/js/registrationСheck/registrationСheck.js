import Notiflix from 'notiflix';
import { marcupMainPage } from '../main-page/mainPage';
import { KEY_LOGIN } from '../helpers/helpers';

const getInfoUser = JSON.parse(localStorage.getItem(KEY_LOGIN));

function registrationCheck(password) {
  if (getInfoUser) {
    if (getInfoUser.password !== password) {
      return Notiflix.Notify.failure('Проверте правильность данных');
    } else {
      marcupMainPage();
    }
  } else {
    return Notiflix.Notify.failure('Нужно заригестрироваться');
  }
}

export default registrationCheck;
