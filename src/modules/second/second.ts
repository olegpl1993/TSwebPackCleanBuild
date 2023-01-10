import './second.scss';
import createElement from '../createElement';

export default function secondPage(contentBox: HTMLElement) { // очищаем узел contentBox
  while (contentBox.firstChild) contentBox.removeChild(contentBox.firstChild);

  const secondBox = createElement(contentBox, 'div', 'secondPage', 'second page');

  return secondBox;
}
