export const pokemons = [
  {
    id: 0,
    img: 'img',
    nombre: 'name',
    experience: 'experience',
    favorite: false,
  },
];

class Pokemon {
  constructor(id, img, nombre, experience) {
    this.id = id;
    this.img = img;
    this.nombre = nombre;
    this.experience = experience;
    this.favorite = false;
  }
}
export const fetchPokemons = async (id) => {
  try {
    // Console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    // Console.log(data);
    // console.log(data.name);

    // Const nom = document.getElementById('pokemonnombre');
    // nom.textContent = data.name;

    // pokemons.shift();
    pokemons.push(
      new Pokemon(
        data.id,
        data.sprites.other.dream_world.front_default,
        data.name,
        data.base_experience
      )
    );

    // PintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};
