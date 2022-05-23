import getRefs from '../refs/getRefs.js';
const { signIn, signOut, formBox, wrapperLogin } = getRefs();

signOut.addEventListener('click', () => {
  formBox.classList.add('active');
  wrapperLogin.classList.add('active');
});

signIn.addEventListener('click', () => {
  formBox.classList.remove('active');
  wrapperLogin.classList.remove('active');
});
