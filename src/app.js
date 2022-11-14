import axios from "axios";

async function fetchAllCountries() {
    const BASE = "https://restcountries.com/"
    const ENDPOINT = "v2/all"
    try {
        const response = await axios.get(BASE + ENDPOINT);
        console.log(response);
        const countries = response.data;

        countries.sort((a, b) => {
            return a.population - b.population
        })
        console.log( countries);

        const listOfCountries = document.getElementById("listOfCountries")
        countries.map((country) => listOfCountries.innerHTML +=
            `<li class="lister"><div class="land-flg">
                                     <h2 class="countries-${country.region} inline" >${country.name}</h2> 
                                     <img class="img-size inline" src="${country.flags.png} " alt="${country.name}">
                            </div>         <h3>Has a population of ${country.population} people </h3>
                                     
                                    
                                   </li>`
        )
    } catch
        (err) {
        console.error(err)
    }
}

fetchAllCountries();


