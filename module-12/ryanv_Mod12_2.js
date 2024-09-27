function make(item) { return document.createElement(item.toString()); }

const book_list = document.querySelector('#book_list');
const titles = Array.from(book_list.querySelectorAll('li'));

function line_up() {
    book_list.innerHTML = '';
    for (let title of titles) {
        book_list.append(title);
    }
    book_list.reversed = false;
}

function line_down() {
    book_list.innerHTML = '';
    reverse = titles.toReversed();
    for (let title of reverse) {
        book_list.append(title);
    }
    book_list.reversed = true;

}