import './index.scss';
import { sample } from '../sample';
const root = document.getElementById('root') as HTMLElement;
root.innerHTML = sample[0];

// Import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
// Import { Items } from './components/items/items';
// import { Menu } from './components/menu/menu';
// Import { Tasks } from './components/tasks/tasks';

// import { mockPets } from './mocks/pets';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Create', path: '/' },
  { label: 'Read', path: '/' },
  { label: 'Update', path: '/' },
  { label: 'Delete', path: '/' },
];

// Console.log('Load sample');
new Header('#root');
// New Menu('.header', menuOptions);
// New Tasks('main', TASK);
// new Items('main', mockPets);
// new Footer('#root');
