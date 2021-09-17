const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data => displayData(data));
}
const displayData = (data) =>{
    const displayUi = document.getElementById('countries')
    const allCountries = data.map(country =>getByHtml(country));
    displayUi.innerHTML = allCountries.join(' ');
}
const getByHtml = country =>{
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <h4>${country.capital}</h4>
            <img src="${country.flag}">
            <div class="btn"><button>Detials</button></div>
        </div>
    `
}


loadCountries();