export const pokemons = [
  {
    id: 0 as number,
    img: 'img' as string,
    nombre: 'name' as string,
    experience: 'experience' as string,
    favorite: false as boolean,
  },
];

class Pokemon {
  constructor(
    public id: number,
    public img: string,
    public nombre: string,
    public experience: string,
    public favorite: boolean
  ) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.experience = experience;
    this.favorite = false;
  }
}
export const fetchPokemons = async (id: number) => {
  try {
    // Console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    pokemons.push(
      new Pokemon(
        data.id,
        data.sprites.other.dream_world.front_default,
        data.name,
        data.base_experience,
        false
      )
    );

    // PintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};
