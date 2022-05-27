import Inputmask from 'inputmask';

function phoneNumberMask(telephoneInput) {
  Inputmask({ mask: '(999) 999-99-99' }).mask(telephoneInput);
}

export default phoneNumberMask;
