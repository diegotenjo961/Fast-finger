import ParseWords from './plugins/parseWords';
import LanguageWords from './plugins/languages';
import './styles/index.css';

const newWords: HTMLElement = document.querySelector('.container-words__new-words');
const instanceLanguage = new LanguageWords();
const methodLanguage = instanceLanguage.language();

const classValidate: ParseWords = new ParseWords(methodLanguage);

newWords.addEventListener('click', () => {
    classValidate.run(methodLanguage);
})

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message);
    })
}

