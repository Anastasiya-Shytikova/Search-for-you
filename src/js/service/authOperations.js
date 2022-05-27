import axios from 'axios';
import { KEY_LOGIN } from '../helpers/helpers';
import { marcupMainPage } from '../main-page/mainPage';
import errorsMessage from './errorsMessage';

const BASE_URL = 'https://powerful-harbor-01122.herokuapp.com';

export const signUpOperation = async ({ email, password }) => {
  try {
    await axios
      .post(`${BASE_URL}/auth/signup`, {
        email,
        password,
      })
      .then(async () => {
        axios
          .post(`${BASE_URL}/auth/signin`, {
            email,
            password,
          })
          .then(response => {
            localStorage.setItem(KEY_LOGIN, JSON.stringify(response.data));
            marcupMainPage();
          })
          .catch(error => {
            const er = error.response.data.error;
            errorsMessage(er);
          });
      })
      .catch(error => {
        const er = error.response.data.error;
        errorsMessage(er);
      });
  } catch (error) {
    console.error(error);
  }
};

export const signInOperation = async ({ email, password }) => {
  try {
    await axios
      .post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      })
      .then(response => {
        localStorage.setItem(KEY_LOGIN, JSON.stringify(response.data));
        marcupMainPage();
      })
      .catch(error => {
        const er = error.response.data.error;
        errorsMessage(er);
      });
  } catch (error) {
    console.error(error);
  }
};
