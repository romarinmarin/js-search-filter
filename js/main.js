const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];


fetch(endpoint)
    .then(res => res.json())
.then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
            return cities.filter(place => {
            const regexp = new RegExp(wordToMatch, 'gi');

            return place.city.match(regexp) || place.state.match(regexp);

        })
}


function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const arrayMatches = findMatches(this.value, cities)
    const html =   arrayMatches.map(match => {
             return `<li>
             <span class="name">${match.city}, ${match.state}</span>
             <span class="population">${numberCommas(match.population)}</span>

             </li>`
        }).join('')

    suggestions.innerHTML = html;

}

const inputSearch = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

inputSearch.addEventListener('keyup', displayMatches)


