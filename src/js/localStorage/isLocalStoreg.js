import { KEY_LOGIN } from '../helpers/helpers';
import { marcupMainPage } from '../main-page/mainPage';

const getInfoUser = JSON.parse(localStorage.getItem(KEY_LOGIN));

if (getInfoUser) {
  marcupMainPage();
}
