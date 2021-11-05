

import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Pokemon = ({ pokemonFetchInfo }) => {
  const {data, isLoading, error } = useFetch(pokemonFetchInfo.url)  
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    setPokemon(data)
  }, [data])

  if(error) {
    return <div>An error occured... oups!</div>
  }
  if(isLoading) {
    return <div>Loading...</div>
  }

  if (!pokemon) return null
  return (
    <div className='card'>
      <img src={pokemon.sprites.front_default} alt='' />
      <h3>{pokemon.name}</h3>
      <p>ID : {pokemon.id}</p>
      <p>Type(s) : {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <div></div>
    </div>
  );
};

export default Pokemon;
