export interface Pokemon {
    name: string,
    url: URL
}

export interface PokemonResponse {
    count: number;
    next: null;
    previous: null;
    results: Pokemon[];

}