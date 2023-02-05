import './index.scss';
// Import { sample } from './sample/sample.test';
// const root = document.getElementById('sample') as HTMLElement;
// root.innerHTML = sample[0];

// Import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
// Import { Items } from './components/items/items';
import { Menu } from './components/menu/menu';

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
