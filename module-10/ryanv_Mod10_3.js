class Clipper {
    constructor() {
        this.clip = document.querySelector(':root');
        this.controller = document.querySelector('#image_slider');
        this.setup();
    }

    setup() {
        this.controller.addEventListener('input', (e) => {
            this.clip.style.setProperty('--clip-amount', (100 - this.value) + '%');
        })
    }

    get value() { return this.controller.value; }

}
const clipper = new Clipper();
const delay = (operation, delay) => new Promise(resolve => setTimeout(resolve, delay));

const images = document.querySelector('section');
const callout = document.querySelector('.speech_bubble');
const lion = 'Roar'
const bear = 'Growl'

images.addEventListener('click', () => {
    const l = Math.round(lion.length * (clipper.value / 100));
    const b = Math.round(bear.length * ((100 - clipper.value) / 100));
    let greeting = lion.slice(0, l);
    if (b) { greeting += bear.slice(-b) };
    callout.innerHTML = greeting + '!';
    hide_greeting();
})

async function hide_greeting() {
    await delay(callout.classList.remove('hidden'), 2000);
    callout.classList.add('hidden')
}