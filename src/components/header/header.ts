import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(
    public selector: string,
    public title: string = 'Pokemon Challenge'
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
        <p role="note" aria-label="info"></p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
