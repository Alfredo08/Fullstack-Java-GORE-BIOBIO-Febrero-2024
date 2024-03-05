
const buscarPerritos = async (event) => {
    event.preventDefault();

    const numDePerritos = document.querySelector('#num-de-perritos').value;
    const url = `https://dog.ceo/api/breeds/image/random/${numDePerritos}`;
    const config = {
        method: 'GET'
    }

    const respuesta = await fetch(url, config);
    console.log(respuesta);
    const JSON = await respuesta.json();
    console.log(JSON);
    
    const resultados = document.querySelector('.resultados');
    resultados.innerHTML = "";

    for(let i = 0; i < JSON.message.length; i ++){
        resultados.innerHTML += `
            <div>
                <img class="imagen-perrito" src="${JSON.message[i]}" alt="Imagen de perrito" >
            </div>`;
    }
    
}