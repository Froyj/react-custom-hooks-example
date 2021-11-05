import useFetch from '../../hooks/useFetch';
import Pokemon from './Pokemon';

const PokemonsList = () => {
  const {data: pokemons, isLoading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')  

  if(error) {
    return <div>An error occured... oups!</div>
  }
  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='pokemon-list'>
      {pokemons && pokemons.results.map((pokemon) => (
        <>
          <Pokemon key={pokemon.name} pokemonFetchInfo={pokemon} />
        </>
      ))}
    </div>
  );
};

export default PokemonsList;
