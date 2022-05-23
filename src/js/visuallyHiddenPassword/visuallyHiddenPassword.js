import getRefs from '../refs/getRefs';

const { formEyeBtn } = getRefs();

function visuallyHiddenPassword() {
  formEyeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      const parent = btn.parentElement.children[0];
      if (parent.getAttribute('type') === 'password') {
        parent.removeAttribute('type');
        parent.setAttribute('type', 'text');
        btn.classList.add('show');
      } else {
        parent.removeAttribute('type');
        parent.setAttribute('type', 'password');
        btn.classList.remove('show');
      }
    });
  });
}
visuallyHiddenPassword();
