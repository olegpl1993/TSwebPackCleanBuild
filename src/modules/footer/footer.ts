import './footer.scss'
import { createElement } from '../createElement'

export function footer(footerBox: HTMLElement) {
  while (footerBox.firstChild) footerBox.removeChild(footerBox.firstChild); // очищаем узел footerBox

  const footer = createElement(footerBox, 'div', 'footer');
  const footerText = createElement(footer, 'div', 'footerText', 'footer 2023');

  return footer;
}