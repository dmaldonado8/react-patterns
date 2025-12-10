import { Error } from './Error';
import { LoadingPokemon } from './LoadingPokemon';
import { useFetchPokemon } from './useFetchPokemon';

export function Pokemon() {
  const { data, loading, error } = useFetchPokemon('pikachu');

  if (loading) {
    return <LoadingPokemon />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {data?.forms.map((item: any) => (
        <div key={item.name}>{item.name}</div>
      ))}
      {data?.sprites.front_default && (
        <img src={data.sprites.front_default} alt="Pokemon Sprite" />
      )}
    </div>
  );
}
