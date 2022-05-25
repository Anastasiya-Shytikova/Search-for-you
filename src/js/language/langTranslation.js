// import { states } from "./states.js"


// const selectRefs = document.querySelector('.select-js')


// function setActiveLang(e) {
//   const language = e.target.value
//   localStorage.setItem('language', language)
//   changeLang(states[language])
// }


// function getActiveLang() {
//   const language = localStorage.getItem('language') 
//   if (!language) {
//     return 'ukrainian'
//   }
//   return language
// }

// changeLang(states[getActiveLang()])



export function changeLang(arr) {  
  for (let key in arr) {
    const text = arr[key]
    const el = document.querySelector('.lang__' + `${key}`)
    if (el !== null) el.innerHTML = arr[key]     
  }   
}

// selectRefs.addEventListener('change', setActiveLang)


