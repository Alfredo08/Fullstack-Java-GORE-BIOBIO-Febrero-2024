
const buscarPokemon = async (event) => {
    event.preventDefault();

    const config = {
        method: 'GET'
    };
    const pokemon = document.querySelector('#pokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const respuesta = await fetch(url, config);
    const JSON = await respuesta.json();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML += `
        <div class="pokemon">
            <h2> ${JSON.name} </h2>
            <img src="${JSON.sprites.front_default}" alt="${JSON.name}">
            <img src="${JSON.sprites.front_shiny}" alt="${JSON.name}">
            <p> Altura: ${JSON.height} </p>
            <p> Peso: ${JSON.weight} </p>
        </div>
    `;

}