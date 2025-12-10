import { useFetch } from '~/hooks/useFetch';

export function useFetchPokemon(pokemonName: string) {
  return useFetch(
    async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch pokemon data');
      }
      const data = await response.json();
      return data as any;
    },
    { retries: 3, enabled: !!pokemonName }
  );
}
