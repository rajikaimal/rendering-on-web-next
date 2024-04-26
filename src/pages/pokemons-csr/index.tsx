import { useEffect, useState } from "react";
import { Pokemon } from "@/pages/types";

export default function PokemonPageCSR() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      const json = await data.json();
      setPokemons(json.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ paddingBottom: 20 }}>Pokemons!</h2>
      <ul>
        {pokemons &&
          pokemons?.length > 0 &&
          pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
    </>
  );
}
