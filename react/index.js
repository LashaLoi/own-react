import { rerender } from "../index";

const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props);

  return {
    tag,
    props: { ...props, children }
  };
};

let states = [];
let cursor = 0;

export const useState = defaultValue => {
  let value =
    typeof defaultValue === "function" ? defaultValue() : defaultValue;

  const setValue = newValue => {
    if (typeof newValue === "function") value = newValue(value);
    else value = newValue;

    rerender();
  };

  return [value, setValue];
};

export default {
  createElement,
  useState
};
