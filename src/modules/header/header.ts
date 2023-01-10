import './header.scss';
import { createElement } from '../createElement';
import logoImg from '../../images/cart.png';

export function header(headerBox: HTMLElement) {
  while (headerBox.firstChild) headerBox.removeChild(headerBox.firstChild); // очищаем узел headerBox

  const headerContainer = createElement(headerBox, 'div', 'header');
  const logo = createElement(headerContainer, 'img', 'logo') as HTMLImageElement;
  logo.alt = `logo`;
  logo.src = logoImg;
  logo.width = 50;
  logo.height = 50;
  logo.loading = 'lazy';

  const mainPageLink = createElement(headerContainer, 'div', 'mainPageLink menuLink', 'main');
  mainPageLink.addEventListener('click', () => { window.location.hash = '#/main' });

  const secondPageLink = createElement(headerContainer, 'div', 'secondPageLink menuLink', 'second');
  secondPageLink.addEventListener('click', () => { window.location.hash = '#/second' });

  return headerContainer;
}