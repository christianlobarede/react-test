import React, { useState } from "react";

const PokemonCard = () => {
  const [index, setIndex] = useState(1);
  let pokémon = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
  ];

  let pokeImg = "";

  const handleIndex = () => {
    index === pokémon.length - 1 ? setIndex(1) : setIndex(index + 1);
    pokeImg +=
      "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
      pokémon[index].id +
      ".png'/>";
    document.querySelector("div.pokeImg").innerHTML = pokeImg;
  };
  return (
    <div className="pokemonCard">
      <h1>Pokemon Name: {pokémon[index - 1].name}</h1>
      <p>Pokemon Id: {pokémon[index - 1].id}</p>
      <p>Pokemon Type: {pokémon[index - 1].types}</p>
      <button onClick={handleIndex}>Click me</button>
      <div className="pokeImg">{pokeImg}</div>
    </div>
  );
};

export default PokemonCard;

/* $("document").ready(function () {
  $("button").click(function () {
    try {
      let pokemonId = parseInt($("#pokemonID").val());
      let pokemonName = $("#pokemonName").val();
      let pokemonTypes = $("#pokemonTypes").val().split(",");

      if (pokemonId === "" || pokemonName === "" || pokemonTypes === "") {
        throw "ningún campo puede estar vacío";
      }

      if (pokémon.filter((p) => p.id === pokemonId).length > 0) {
        throw "el id pokemon ya está registrado";
      }

      pokémon.push({
        id: pokemonId,
        name: pokemonName,
        types: pokemonTypes,
      });
    } catch (error) {
      alert(error);
    }
  });
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"
        {...(1)}
}); */
