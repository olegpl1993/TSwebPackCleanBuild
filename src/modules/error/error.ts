import './error.scss'
import { createElement } from '../createElement'

export function errorPage(contentBox: HTMLElement) {
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild); // очищаем узел contentBox

  const error = createElement(contentBox, 'div', 'error', '404: page not found');
  return error;
}