const mapEvent = {
  onClick: "click",
  onChange: "change"
};

const render = (reactElement, container) => {
  if (["string", "number"].includes(typeof reactElement)) {
    const textNode = document.createTextNode(reactElement);

    container.appendChild(textNode);
    return;
  }

  const el = document.createElement(reactElement.tag);

  if (reactElement.props) {
    Object.keys(reactElement.props)
      .filter(prop => prop !== "children")
      .forEach(prop => {
        if (typeof reactElement.props[prop] === "function") {
          el.addEventListener(mapEvent[prop], event => {
            reactElement.props[prop](event);
          });
        } else {
          el[prop] = reactElement.props[prop];
        }
      });
  }

  if (reactElement.props.children) {
    reactElement.props.children.forEach(child => render(child, el));
  }

  container.appendChild(el);
};

export default {
  render
};
