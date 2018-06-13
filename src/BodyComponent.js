import IndexComponent from "./IndexComponent";
// import './angular-components/main';

const AppRootElement = document.createElement('app-root');

const BodyComponent = document.getElementsByTagName('body')[0];

BodyComponent.appendChild(IndexComponent);
BodyComponent.appendChild(AppRootElement);

export default BodyComponent;