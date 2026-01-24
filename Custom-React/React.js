function CustomRendar(Reactelement, Container) {
  /* const domElement = document.createElement(Reactelement.type);
  domElement.innerHTML = Reactelement.children;
  domElement.setAttribute("href", Reactelement.props.href);
  domElement.setAttribute("target", Reactelement.props.target);
  Container.appendChild(domElement); */

  const domElement = document.createElement(Reactelement.type);
  domElement.innerHTML = Reactelement.children;
  for (const prop in Reactelement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, Reactelement.props[prop])
  }
  Container.appendChild(domElement)
}
const Reactelement = {
  type: "a",
  props: {
    href: "http://127.0.0.1:5500/Custom-React/",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.querySelector("#root");
CustomRendar(Reactelement, mainContainer);
