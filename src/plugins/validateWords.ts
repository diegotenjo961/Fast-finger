import Time from './time';

class validateWords {
    private time: Time;

    private inputWords: HTMLInputElement;
    private oneWord: HTMLElement;
    private counterGoodWords: HTMLElement;
    private counterWrongWords: HTMLElement;
    private containerKeystrokes: HTMLElement;
    private containerKeystrokesWrong: HTMLElement;
    private buttonNewWords: HTMLElement;
    private containerTime: HTMLElement;
    private containerWords: HTMLElement;
    private correctWordsContainer: HTMLElement;
    private wrongWordsContainer: HTMLElement;

    private nextWord: number = 0;
    private counterLettersGood: number = 0;
    private counterLettersBad: number = 0;
    private goodWords: number;
    private correctWords: number = 0;
    private badWords: number = 0;
    private wrongWords: number;
    private counterTime: number;

    private boolean: boolean = false;
    private booleanInput: boolean = true;

    private idTimeOut: any;

    constructor() {
        this.wrongWordsContainer = document.querySelector('.wrong-words');
        this.correctWordsContainer = document.querySelector('.correct-words');
        this.containerTime = document.querySelector('.container-words__time')
        this.buttonNewWords = document.querySelector('.container-words__new-words');
        this.inputWords = document.querySelector('.container-words__input');
        this.counterGoodWords = document.querySelector('.results__correct-words');
        this.counterWrongWords = document.querySelector('.results__wrong-words');
        this.containerKeystrokes = document.querySelector('.keystrokes-correct');
        this.containerKeystrokesWrong = document.querySelector('.keystrokes-wrong');
    }
    validate(containerWords: HTMLElement){
        this.inputWords.focus();
        this.containerWords = containerWords;
        this.buttonNewWords.addEventListener('click',() => {
            this.containerTime.innerHTML = '1:00';
            this.inputWords.focus();
            this.boolean = true;
            this.booleanInput = true;
            clearTimeout(this.idTimeOut)
        })
        if (this.boolean) {
            this.badWords = 0;
            this.correctWords = 0;
            this.nextWord = 0;
            this.counterLettersBad = 0;
            this.counterLettersGood = 0;
            this.inputWords.value = '';
            this.counterGoodWords.innerHTML = `${this.goodWords} WPM`;
            this.counterWrongWords.innerHTML = `${this.wrongWords} Ww`;
            return;
        }

        this.containerKeystrokes.innerText = `${this.counterLettersGood}`;
        this.containerKeystrokesWrong.innerText = `${this.counterLettersBad}`;

        this.inputWords.addEventListener('input', this.handleInput.bind(this));
    }

    startTyping() {
        if (this.booleanInput) {
            this.time = new Time(59, 0, this.buttonNewWords);
            this.time.temporization();
            this.booleanInput = false;
            this.idTimeOut = setTimeout(() => {
                    this.counterGoodWords.innerHTML = `${this.goodWords} WPM`;
                    this.counterWrongWords.innerHTML = `${this.wrongWords} Ww`;
                    this.correctWordsContainer.innerHTML = `${this.correctWords}`
                    this.wrongWordsContainer.innerHTML = `${this.badWords}`;

                    this.containerKeystrokes.innerText = `${this.counterLettersGood}`;
                    this.containerKeystrokesWrong.innerText = `${this.counterLettersBad}`;
                    this.containerWords.style.display = 'none';
                }, 60000);
        }
    }

    handleInput(e: any) {
        // this execute just when start typing
        this.startTyping()

        if (e.data === ' ') {
            this.keyPressSpace();
        }
        else{
            this.oneWord = document.querySelector(`.word-${this.nextWord}`)

            const arrayInput = this.inputWords.value.split('');
            const arrayWord = this.oneWord.innerHTML.split('');
            for(const index in arrayInput){
                if(arrayInput[index] === arrayWord[index]){
                    this.oneWord.style.color = 'green';
                }
                else{
                    this.oneWord.style.color = 'red';
                }
            }
        }
    }

    keyPressSpace() {
        this.oneWord = document.querySelector(`.word-${this.nextWord}`);

        if (this.oneWord.innerHTML === this.inputWords.value) {
            this.correctWords += 1;
        }
        const arrayInput = this.inputWords.value.split('');
        const arrayWord = this.oneWord.innerHTML.split('');
        for(const index in arrayInput){
            if(arrayInput[index] === arrayWord[index]){
                this.counterLettersGood += 1;
            }
            else{
                this.counterLettersBad += 1;
            }
        }
        if(this.inputWords.value !== this.oneWord.innerHTML){
            this.badWords += 1;
        }
        this.counterLettersGood -= 1;
        this.wrongWords = Math.round(this.counterLettersBad / 5);
        this.goodWords = Math.round(this.counterLettersGood / 5);

        this.containerKeystrokes.style.color = 'green'
        this.containerKeystrokesWrong.style.color = 'red'

        this.oneWord.remove();
        this.nextWord += 1;
        this.inputWords.value = '';
    }
}

export default validateWords;