import React from "react";
import "./App.css";
import Form from "./components/Form";
import NuevoComponente from "./components/NuevoComponente";

import PersonCard from "./components/PersonCard";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="Jon" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
      <Form />
      <NuevoComponente />
      <PokemonCard />
    </div>
  );
}

export default App;
