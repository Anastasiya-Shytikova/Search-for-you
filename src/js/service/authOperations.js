import axios from 'axios';
import { KEY_LOGIN } from '../helpers/helpers';
import { marcupMainPage } from '../main-page/mainPage';

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
          });
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInOperation = async ({ email, password }) => {
  try {
    axios
      .post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      })
      .then(response => {
        localStorage.setItem(KEY_LOGIN, JSON.stringify(response.data));
        marcupMainPage();
      });
  } catch (error) {
    console.log(error);
  }
};
