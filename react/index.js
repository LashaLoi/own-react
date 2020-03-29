import { rerender } from "../index";

const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props);

  return {
    tag,
    props: { ...props, children }
  };
};

let states = [];
let idx = 0;

export const useState = defaultValue => {
  let i = idx;
  let value = states[i] || defaultValue;

  states[i] = value;
  const setValue = newValue => {
    if (typeof newValue === "function") states[i] = newValue(value);
    else states[i] = newValue;

    idx = 0;
    rerender();
  };

  idx++;
  return [value, setValue];
};

let useEffectDeps = null;
export const useEffect = (cb, depsArray) => {
  useEffectDeps = useEffectDeps || depsArray;

  if (!depsArray.length) cb();

  useEffectDeps.forEach((dep, i) => {
    if (!Object.is(dep, depsArray[i])) {
      cb();
      useEffectDeps = depsArray;
    }
  });

  idx++;
};

let useCallbackDeps = null;
let oldCallback = null;
export const useCallback = (cb, depsArray) => {
  useCallbackDeps = useCallbackDeps || depsArray;

  if (!depsArray.length) {
    oldCallback = cb;
    return cb;
  }

  useCallbackDeps.forEach((dep, i) => {
    if (!Object.is(dep, depsArray[i])) {
      oldCallback = cb;
      useCallbackDeps = depsArray;
    }
  });

  idx++;
  return oldCallback;
};

export default {
  createElement,
  useState,
  useEffect
};
