const cards = document.querySelector('#card-poke');
const templateCard = document.querySelector('#template-card').content;
let currentPage = 1;  // Página inicial
const baseUrl = 'https://rickandmortyapi.com/api/character';

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

//const fetchData = async (page = 1) => {
//    try {
//        loadingData(true);
//        const res = await fetch(${baseUrl}?page=${page});
//        const personajes = await res.json();
//        pintarCards(personajes.results);
 //       updateButtons(personajes.info);
 //   } catch (error) {
//        console.error('Error =>', error);
//    } finally {
//        loadingData(false);
//    }
//};
const fetchData = async (page = 1) => {
    try {
        loadingData(true);
        const res = await fetch(`${baseUrl}?page=${page}`);
        const personajes = await res.json();
        pintarCards(personajes.results);
        updateButtons(personajes.info);
    } catch (error) {
        console.error('Error =>', error);
    } finally {
        loadingData(false);
    }
};

const pintarCards = (characters) => {
    const fragment = document.createDocumentFragment();
    cards.textContent = '';
    characters.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('img').setAttribute('src', item.image);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

const loadingData = (estado) => {
    const loading = document.querySelector('#Loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
};

const updateButtons = (info) => {
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    // Desactivar o activar los botones dependiendo de la disponibilidad de las páginas
    prevBtn.disabled = !info.prev;
    nextBtn.disabled = !info.next;
};

document.querySelector('#prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchData(currentPage);
    }
});

document.querySelector('#next-btn').addEventListener('click', () => {
    currentPage++;
    fetchData(currentPage);
});