class Time {
    private className: string;
    actualTime: number;
    private finish: number;
    private boolean: boolean;
    private buttonNewWords: HTMLElement;
    private buttonNWClicked: boolean;
    private idInterval: number; 


    constructor(start: number, finish: number, buttonNewWords: HTMLElement) {
        this.className = 'container-words__time';
        this.actualTime = start;
        this.finish = finish;
        this.buttonNWClicked = false;
        this.buttonNewWords = buttonNewWords;
    }

    temporization(){
        this.buttonNewWords.addEventListener('click', () => {
            this.buttonNWClicked = true;
        })
        const idInterval = setInterval(() => {
            if (this.actualTime === this.finish) {
                document.querySelector(`.${this.className}`).innerHTML = `1:00`
                clearInterval(idInterval)
                return;
            }
            if (this.buttonNWClicked) {
                this.actualTime = 0
                clearInterval(idInterval)
                return;
            }
            const time: string = this.actualTime.toString();
            const containerTime = document.querySelector(`.${this.className}`);
            containerTime.innerHTML = `0:${time}`
            this.actualTime -= 1;
        }, 1000)
    }
}
export default Time;
