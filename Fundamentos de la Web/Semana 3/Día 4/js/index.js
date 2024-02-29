function loadWeatherReport(elementoCiudadBurbank){
    alert("Loading weather report...");
}

function removeCookie(elementoBotonCookie){
    elementoBotonCookie.closest('footer').remove();
}

function changeTemperature(elementoTemperatura){
    if(elementoTemperatura.value === 'farenheit'){
        let todasLasTemperaturas = document.querySelectorAll('.max-temp, .min-temp');
        console.log(todasLasTemperaturas);
        for(let i = 0; i < todasLasTemperaturas.length; i ++){
            let numEnCelcius = Number(todasLasTemperaturas[i].innerText);
            let numEnFarenheit = (numEnCelcius * 9/5) + 32;
            todasLasTemperaturas[i].innerText = Math.round(numEnFarenheit);
        }
    }
    if(elementoTemperatura.value === 'celcius'){
        let todasLasTemperaturas = document.querySelectorAll('.max-temp, .min-temp');
        console.log(todasLasTemperaturas);
        for(let i = 0; i < todasLasTemperaturas.length; i ++){
            let numEnFarenheit = Number(todasLasTemperaturas[i].innerText);
            let numEnCelcius = (numEnFarenheit - 32) * 5 / 9;
            todasLasTemperaturas[i].innerText = Math.round(numEnCelcius);
        }
    }
}