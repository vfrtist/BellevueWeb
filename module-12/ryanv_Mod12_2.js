function make(item) { return document.createElement(item.toString()); }

const book_list = document.querySelector('#book_list');
const titles = Array.from(book_list.querySelectorAll('li'));
const up = document.querySelector('#up');
const down = document.querySelector('#down');

function line_up() {
    book_list.innerHTML = '';
    for (let title of titles) {
        book_list.append(title);
    }
    book_list.reversed = false;
}

function line_down() {
    book_list.innerHTML = '';
    const reverse = titles.toReversed();
    for (let title of reverse) {
        book_list.append(title);
    }
    book_list.reversed = true;
}

up.addEventListener('click', line_up)
down.addEventListener('click', line_down)