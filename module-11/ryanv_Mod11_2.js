function make(item) { return document.createElement(item.toString()); }
const add_button = document.querySelector('#list_add');
const add_display = document.querySelector('#list_display');
const task_list = document.querySelector('#task_list');
const add_item = document.querySelector('#add_item');

// Manually create counter and reset function 

add_button.addEventListener('click', (e) => {
    e.preventDefault();
    new listObject(add_item.value)
})

add_display.addEventListener('click', (e) => {
    e.preventDefault();
})

task_list.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        let container = e.target.closest('li');
        let next = container.nextElementSibling;
        while (next) {
            next.value = next.previousElementSibling.value + 1;
            next.update_description();
            next = next.nextElementSibling;
        };
        container.remove();
    };
})

class listObject {
    constructor(text) {
        this.text = text;
        this.frame = make('li');
        this.delete = make('button');
        this.value = document.querySelectorAll('#task_list li').length + 1;
        this.setup();
    }

    setup() {
        let text = make('span');
        text.innerHTML = this.text;
        this.delete.innerHTML = 'Delete';
        this.delete.classList.add('remove');

        this.frame.append(text);
        this.frame.append(this.delete);
        task_list.append(this.frame);
    }

    update_description() { this.text.innerHTML = this.value + " - " + this.text; }
    // set value(val) { this.value = val }
}