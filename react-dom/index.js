const mapEvent = {
  onClick: "click",
  onChange: "input"
};

const render = (reactElement, container) => {
  if (["string", "number"].includes(typeof reactElement)) {
    const textNode = document.createTextNode(reactElement);

    container.appendChild(textNode);
    return;
  }

  const el = document.createElement(reactElement.tag);
  const { props } = reactElement;

  if (props) {
    Object.keys(props)
      .filter(prop => prop !== "children")
      .forEach(prop => {
        if (typeof props[prop] === "function") {
          el.addEventListener(mapEvent[prop], event => {
            props[prop](event);
          });
        } else {
          el[prop] = props[prop];
        }
      });
  }
  if (props?.children) props.children.forEach(child => render(child, el));

  container.appendChild(el);
};

export default {
  render
};
