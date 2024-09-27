function make(item) { return document.createElement(item.toString()); }
function trashButton() {
    let icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.innerHTML = trash.path;
    icon.setAttribute('viewBox', trash.viewbox);
    return icon;
}

const trash = {
    viewbox: '0 0 29.3 36',
    path: '<path d="M25.7,11.9l-4.1,18.2l0,0l0,0C21,33.3,20.2,34,20,34H9.3c0,0-0.8-0.1-1.6-3.9L3.6,11.9H25.7 M28.2,9.9H1.1' +
        'l4.7,20.7C6.3,33.6,7.3,36,9.3,36H20c2,0,3-2.5,3.6-5.5L28.2,9.9L28.2,9.9z M15.6,29.1V18.4c0-0.6-0.4-1-1-1s-1,0.4-1,1v10.7' +
        'c0,0.6,0.4,1,1,1S15.6,29.6,15.6,29.1z M19.7,29.2l1.5-10.7c0.1-0.5-0.3-1.1-0.9-1.1c-0.5-0.1-1.1,0.3-1.1,0.9L17.7,29' +
        'c-0.1,0.5,0.3,1.1,0.9,1.1c0,0,0.1,0,0.1,0C19.2,30.1,19.7,29.7,19.7,29.2z M10.7,30.1c0.5-0.1,0.9-0.6,0.9-1.1L10,18.2' +
        'c-0.1-0.5-0.6-0.9-1.1-0.9C8.4,17.5,8,18,8.1,18.5l1.5,10.7c0.1,0.5,0.5,0.9,1,0.9C10.6,30.1,10.7,30.1,10.7,30.1z" />' +
        '<path d="M14.6,2c0.3,0,0.5,0.2,0.5,0.4l0.5,1.3H17h6.5c1.1,0,2.2,1,2.9,2.2H2.9c0.8-1.2,1.9-2.2,2.9-2.2h6.5h1.4' +
        'l0.5-1.3C14.2,2.2,14.4,2,14.6,2 M14.6,0c-1.1,0-2,0.7-2.4,1.7H5.8c-3,0-5.4,3.5-5.8,6.2h29.3c-0.4-2.7-2.8-6.2-5.8-6.2H17' +
        'C16.7,0.7,15.7,0,14.6,0L14.6,0z" />'
}

const add_button = document.querySelector('#list_add');
const display_button = document.querySelector('#list_display');
const task_list = document.querySelector('#task_list');
const task_completed = document.querySelector('#task_completed');
const add_item = document.querySelector('#add_item');

add_button.addEventListener('click', (e) => {
    e.preventDefault();
    new listObject(add_item.value)
})

display_button.addEventListener('click', (e) => {
    e.preventDefault();
    task_completed.innerHTML = '';
    display_button.disabled = true;
})

class listObject {
    constructor(text) {
        this.text = text;
        this.frame;
        this.delete;
        this.value;
        this.setup();
    }

    setup() {
        let text = make('span');
        this.frame = make('li');
        this.delete = trashButton();
        this.value = make('span');

        text.innerHTML = this.text;
        this.value.innerHTML = task_list.querySelectorAll('li').length + 1;
        this.value.classList.add('pos');
        this.delete.classList.add('remove');

        this.frame.append(this.value, text, this.delete);
        task_list.append(this.frame);

        this.delete.addEventListener('click', () => {
            task_completed.append(this.frame);
            this.delete.remove();
            this.value.remove();
            update_description();
            display_button.disabled = false;
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
