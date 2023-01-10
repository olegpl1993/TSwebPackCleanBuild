import './main.scss';
import createElement from '../createElement';

export default function mainPage(contentBox: HTMLElement) {
  // очищаем узел contentBox
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild);

  const mainBox = createElement(contentBox, 'div', 'main', 'main page');

  return mainBox;
}
