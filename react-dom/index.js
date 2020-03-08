const render = ({ tag, props, children }, htmlRoot) => {
  const el = document.createElement(tag);

  if (props) {
    Object.keys(props).forEach(prop => {
      el[prop] = props[prop];
    });
  }

  if (typeof children === "object") render(children, el);
  else el.innerText = children;

  htmlRoot.appendChild(el);
};

export default {
  render
};
