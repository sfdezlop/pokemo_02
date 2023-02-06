import { Component } from '../component/component';
import { MenuOption } from '../../models/menu';
// Import { menuOptions } from '../../models/menu';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string, public menuOptions: MenuOption[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.menuOptions
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('');
    return `
    <nav class="header__menu" role="header__menu"><ul class="header__menu">${items}</ul></nav>
    `;
  }
}
