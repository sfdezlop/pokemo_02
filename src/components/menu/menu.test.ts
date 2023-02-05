import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu } from './menu';
import { MenuOption } from '../../models/menu';
import { menuOptions } from '../../models/menu';

describe('Given Menu component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockOption = [{ label: 'Testmenu', path: '/' }];
    const element = new Menu('slot', mockOption);
    // Expect(element).toBeInstanceOf(Menu);
    // const h1 = screen.getByRole('heading', { name: mockOption });
    // expect(h1).toBeInTheDocument();
    const p = screen.getByRole('header__menu');
    expect(p).toBeInTheDocument();
  });
});
