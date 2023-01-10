import './footer.scss';
import createElement from '../createElement';

export default function footer(footerBox: HTMLElement) {
  // очищаем узел footerBox
  while (footerBox.firstChild) footerBox.removeChild(footerBox.firstChild);

  const footerContainer = createElement(footerBox, 'div', 'footer');
  createElement(footerContainer, 'div', 'footerText', 'footer 2023');

  return footerContainer;
}
