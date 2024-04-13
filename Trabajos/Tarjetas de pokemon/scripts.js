$(document).ready(function() {
  // Obtener datos de 30 Pokémon de la API
  $.get("https://pokeapi.co/api/v2/pokemon?limit=30", function(data) {
    data.results.forEach(function(pokemon) {
      $.get(pokemon.url, function(details) {
        renderizarTarjetaPokemon(details);
      });
    });
  });

  // Función para renderizar una tarjeta de Pokémon
  function renderizarTarjetaPokemon(pokemon) {
    var tarjetaHTML = `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${pokemon.sprites.other['official-artwork'].front_default}" class="card-img-top" alt="${pokemon.name}">
          <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text"><strong>ID:</strong> ${pokemon.id}</p>
            <p class="card-text"><strong>Tipo:</strong> ${pokemon.types.map(type => type.type.name).join(", ")}</p>
            <p class="card-text"><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
            <p class="card-text"><strong>Altura:</strong> ${pokemon.height / 10} m</p>
          </div>
        </div>
      </div>
    `;
    $("#cartas-pokemon").append(tarjetaHTML);
  }
});