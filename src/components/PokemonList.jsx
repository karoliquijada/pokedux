import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;