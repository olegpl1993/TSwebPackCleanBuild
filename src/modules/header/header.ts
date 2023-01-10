import './header.scss';
import { createElement } from '../createElement';
import logoImg from '../../images/cart.png';
import { route } from '../..';

export function header(headerBox: HTMLElement) {
  while (headerBox.firstChild) headerBox.removeChild(headerBox.firstChild); // очищаем узел headerBox

  const headerContainer = createElement(headerBox, 'div', 'header');
  const logo = createElement(headerContainer, 'img', 'logo') as HTMLImageElement;
  logo.alt = `logo`;
  logo.src = logoImg;
  logo.width = 50;
  logo.height = 50;
  logo.loading = 'lazy';

  const mainPageA = createElement(headerContainer, 'a', 'mainPageBtn menuBtn', 'main');
  (mainPageA as HTMLAnchorElement).href = '#/main';
  mainPageA.addEventListener('click', (event) => route(event));
  const secondPageA = createElement(headerContainer, 'a', 'secondPageBtn menuBtn', 'second');
  (secondPageA as HTMLAnchorElement).href = '#/second';
  secondPageA.addEventListener('click', (event) => route(event));

  return headerContainer;
}