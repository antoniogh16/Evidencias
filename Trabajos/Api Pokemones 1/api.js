const url = "https://pokeapi.co/api/v2/pokemon/";

window.onload = function() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemones = data.results;
            const cuerpoTabla = document.querySelector("#tabla tbody");
            let contador = 1;
            pokemones.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(respuesta => respuesta.json())
                    .then(infoPokemon => {
                        cuerpoTabla.innerHTML += `<tr>
                            <td>${contador}</td>
                            <td>${pokemon.name}</td>
                            <td><img src="${infoPokemon.sprites.front_default}" alt="${pokemon.name}"></td>
                        </tr>`;
                        contador++;
                    });
            });
        });
}
