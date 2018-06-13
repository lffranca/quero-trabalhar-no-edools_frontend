const HeadComponent = document.getElementsByTagName('head')[0];

const LinkElement = document.createElement('link');
LinkElement.type = 'image/x-icon';
LinkElement.href = 'favicon.ico';

// ADICIONANDO ELEMENTOS NO COMPONENT HEAD
HeadComponent.appendChild(LinkElement);

export default HeadComponent;