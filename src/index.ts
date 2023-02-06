import './index.scss';
// Import { sample } from './sample/sample.test';
// const root = document.getElementById('sample') as HTMLElement;
// root.innerHTML = sample[0];

// Import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
// Import { Items } from './components/items/items';
import { Menu } from './components/menu/menu';
import { fetchPokemons } from './services/repository/pokemon.api.repo';
import { pokemons } from './services/repository/pokemon.api.repo';

// Import { Tasks } from './components/tasks/tasks';

// import { mockPets } from './mocks/pets';

// import { MenuOption } from '../models/menu';
import { menuOptions } from './models/menu';

// Console.log('Load sample');
new Header('#root');
new Menu('.header__title', menuOptions);
// New Tasks('main', TASK);
// new Items('main', mockPets);
// new Footer('#root');

// pokemons.shift();

const botoncargar = document.getElementById('botoncargar') as HTMLElement;
const pk = document.getElementById('pokemon') as HTMLElement;

botoncargar.addEventListener('click', () => {
  for (let i = 1; i < 200; i++) {
    fetchPokemons(i);
  }

  console.table(pokemons);

  const pokemonOpenSection: string = `<section class="pokemon__section1">`;
  const pokemonCloseSection: string = `</section>`;
  let pokemonArticle: string = '';

  for (let i = botoncargar.value - 19; i <= botoncargar.value; i++) {
    pokemonArticle =
      pokemonArticle.concat(`<article class="section__article"><h2 class="article__title2"><a class: "article__link" href="detail.html?${pokemons[i].id}">${pokemons[i].nombre}</a></h2><div>
  <img class: "article__img" src="${pokemons[i].img}" alt="Image of Pokemon ${pokemons[i].nombre}" width="100rem"></div></img><div><button class="article__button" data-id="favoriteid${pokemons[i].id}">${pokemons[i].favorite}</button></div></article>`);
  }

  const pokemonSection: string = pokemonOpenSection
    .concat(pokemonArticle)
    .concat(pokemonCloseSection);

  pk.innerHTML = pokemonSection;

  const selectAFavoritePokemon = [...document.querySelectorAll('.favoriteid')];

  console.table(selectAFavoritePokemon);

  for (let i = 0; i < selectAFavoritePokemon.length; i++) {
    document.selectAFavoritePokemon[i].addEventListener('click', () => {
      console.log(document.selectAFavoritePokemon[i].id);
    });
  }
});
