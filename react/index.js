const React = {
  createElement: (tag, props, children) => {
    if (typeof tag === "function") return tag(props);

    return {
      tag,
      props,
      children
    };
  }
};

export default React;
