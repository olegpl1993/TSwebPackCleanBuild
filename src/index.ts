import './index.scss';
import { createElement } from './modules/createElement';
import { mainPage } from './modules/main/main';
import { secondPage } from './modules/second/second';
import { errorPage } from './modules/error/error';
import { header } from './modules/header/header';
import { footer } from './modules/footer/footer';

export const wrapper = createElement(document.body, 'div', 'wrapper');
export const headerBox = createElement(wrapper, 'div', 'headerBox');
export const contentBox = createElement(wrapper, 'div', 'contentBox');
export const footerBox = createElement(wrapper, 'div', 'footerBox');

export function route(event: Event) {
  event.preventDefault(); // отменяет стандартное поведение якоря
  window.history.pushState({}, "", (event.target as HTMLAnchorElement).href); //меняет строку в браузере
  router();
}

export function router() {
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild); // очищаем узел contentBox
  const hash = window.location.hash; //получает хеш из строки браузера
  if (hash === '' || hash === '#/' || hash === '#/main') mainPage(contentBox);
  else if (hash === '#/second') secondPage(contentBox);
  else errorPage(contentBox);
}

window.addEventListener('load', () => {
  header(headerBox);
  footer(footerBox);
  router();
});
