import './main.scss'
import { createElement } from '../createElement'

export function mainPage(contentBox: HTMLElement) {
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild); // очищаем узел contentBox

  const mainBox = createElement(contentBox, 'div', 'main', 'main page');

  return mainBox;
}
