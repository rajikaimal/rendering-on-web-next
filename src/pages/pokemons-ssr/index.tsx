import { Pokemon } from "@/pages/types";

export async function getStaticProps() {
  // Fetch data from external API
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await data.json();

  console.log("Server side: This run only on server", data);

  // Pass data to the page via props
  return {
    props: { pokemons: json.results },
  };
}

export default function PokemonPageSSR({
  pokemons,
}: {
  pokemons: Array<Pokemon>;
}) {
  console.log("Client side", pokemons);

  return (
    <>
      <h2 style={{ paddingBottom: 20 }}>Pokemons!</h2>
      <ul>
        {pokemons?.length > 0 &&
          pokemons.map((pokemon: Pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
      </ul>
    </>
  );
}
