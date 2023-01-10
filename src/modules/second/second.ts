import './second.scss'
import { createElement } from '../createElement'

export function secondPage(contentBox: HTMLElement) {
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild); // очищаем узел contentBox

  const secondBox = createElement(contentBox, 'div', 'secondPage', 'second page');

  return secondBox;
}