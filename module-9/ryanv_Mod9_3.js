const theHidden = document.querySelectorAll('.covered');

function make(item) { return document.createElement(item.toString()); }

class Reveal_Button {
    constructor(hidden_element) {
        this.hidden_element = hidden_element;
        this.container = hidden_element.parentNode;
        this.button = make('button');
        this.setup();
    }

    setup() {
        this.button.innerHTML = 'Reveal';
        this.button.setAttribute('type', 'button');
        this.button.classList.add('reveal_button');
        this.container.append(this.button);
        this.button.addEventListener('click', (e) => {
            this.hidden_element.classList.remove('covered');
            this.button.classList.add('inactive');
        });

        this.button.addEventListener('mouseenter', () => {
            this.hidden_element.classList.add('active')
        })
        this.button.addEventListener('mouseleave', () => {
            this.hidden_element.classList.remove('active')
        })
    }
}


for (hidden of theHidden) {
    new Reveal_Button(hidden);
}
