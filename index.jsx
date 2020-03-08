import React from "./react";
import ReactDom from "./react-dom";

const B = props => <div>1{props.someProps}</div>;

const A = () => (
  <div>
    Alex
    <B someProps="Loi" />
  </div>
);

ReactDom.render(<A />, document.getElementById("root"));
