function make(item) { return document.createElement(item.toString()); }
const add_button = document.querySelector('#list_add');
const add_display = document.querySelector('#list_display');
const task_list = document.querySelector('#task_list');
const task_completed = document.querySelector('#task_completed');
const add_item = document.querySelector('#add_item');

add_button.addEventListener('click', (e) => {
    e.preventDefault();
    new listObject(add_item.value)
})

add_display.addEventListener('click', (e) => {
    e.preventDefault();
    task_completed.innerHTML = ''
})

class listObject {
    constructor(text) {
        this.text = text;
        this.frame = make('li');
        this.delete = make('button');
        this.value = make('span');
        this.setup();
    }

    setup() {
        let text = make('span');
        text.innerHTML = this.text;
        this.value.innerHTML = task_list.querySelectorAll('li').length + 1;
        this.value.classList.add('pos');
        this.delete.innerHTML = 'Complete';
        this.delete.classList.add('remove');

        this.frame.append(this.value, text, this.delete);
        task_list.append(this.frame);

        this.delete.addEventListener('click', () => {
            task_completed.append(this.frame);
            this.delete.remove();
            this.value.remove();
            update_description();
        })
    }
}

function update_description() {
    let count = 1
    for (const line of task_list.querySelectorAll('li')) {
        line.querySelector('.pos').innerHTML = count;
        count++
    }
}
