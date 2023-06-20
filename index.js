const comics = [
    { book: 'Sin City' },
    { book: 'Preacher' },
    { book: 'The Long Helloween' },
    { book: 'Swamp Thing' },
    { book: 'Watchmen' },
    { book: 'Neonomikon' },
    { book: 'Scott Piligrim' },
    { book: 'Hellblazer' },
    { book: 'Metabarons' },
    { book: 'Tank Girl' },
    { book: 'Sandman' },
    { book: 'Black Hammer' },
    { book: 'Gideon Falls' },
    { book: 'Transmetropolitan' },
    { book: 'Maus' },
    { book: 'V for Vendetta' },
    { book: 'Blacksad' },
    { book: 'Hellboy' },
    { book: 'Baltimore' },
    { book: 'Klaus' },
    { book: 'Spawn' },
];

const input = document.querySelector('#input-filter');
const comicsList = document.querySelector('.comics-list');

const newComicsList = newListMarkUp(comics);

populateList(newComicsList);

function newListMarkUp(items) {
   return items.map(t => `<li>${t.book}</li>`).join('');
};

input.addEventListener('input', onListFilter);

function onListFilter(e) {
    const filter = e.target.value.toLowerCase();
   
    const filteredList = comics.filter(t => t.book.toLowerCase().includes(filter));
const newComicsList = newListMarkUp(filteredList)
    populateList(newComicsList);
}

function populateList(markup) {
    comicsList.innerHTML = markup;
}