import getRefs from "../refs/getRefs";
import { changeLang } from "./langTranslation";
import states  from "./states";
import  ukrainian  from "./ukrainian";

const { selectContainer } = getRefs()
let laungesFromLocalStorage = localStorage.getItem('launges')



if (!laungesFromLocalStorage) {
  laungesFromLocalStorage = 'ukrainian';
}

const laungueses = [
    {
    name: 'ukrainian',
    value: 'UA',
  },
  {
    name: 'english',
    value: 'EN',
  },

   {
    name: 'russian',
    value: 'RU',
  },
];

const createBoxForOptions = markupOptions => {
  let selectedValue = '';
  for (const { name, value } of laungueses) {
    if (name === laungesFromLocalStorage) {
      selectedValue = value;
    }
   
  }
  return `
  <div class="select__box">
    <div class="options__container">
        ${markupOptions}
    </div>
    <div class="selected">${selectedValue}</div>
  </div>
  `;
};

const createContainerOptionForSelect = data => {
  return data
    .map(({ name, value }) => {
      return `
      <div class="options">
        <input id="${name}" class="radio" type="radio" name="category" />
        <label for="${name}">${value}</label>
      </div>
            `;
    })
    .join('');
};

selectContainer.innerHTML = createBoxForOptions(createContainerOptionForSelect(laungueses));

const optionContainer = document.querySelector('.options__container');
const selected = document.querySelector('.selected');
const optionList = document.querySelectorAll('.options');

selected.addEventListener('click', () => {
  optionContainer.classList.toggle('options__active');
});


changeLang(states[laungesFromLocalStorage])


optionList.forEach(el => {
  el.addEventListener('change', e => {
    selected.innerHTML = el.querySelector('label').innerHTML;
    optionContainer.classList.remove('options__active');

    const launges = e.currentTarget.children[0].id;
    localStorage.setItem('launges', launges);
    location.reload();
    changeLang(states[launges])
      
  });
});