import Notiflix from 'notiflix';

const errorsMessage = error => {
  if (error === 'emailExist') {
    Notiflix.Notify.info(
      'Пользователь с таким Email уже зарегестрирован. Воспользуйтесь формой входа',
    );
  }

  if (error === 'noCorrectPassword') {
    Notiflix.Notify.failure('Не правильно ввели пароль. Попробуйте еще раз');
  }

  if (error === 'noExist') {
    Notiflix.Notify.failure(
      'Пользователя с таким Email не существует. Воспользуйтесь формой регистрации',
    );
  }
};

export default errorsMessage;
