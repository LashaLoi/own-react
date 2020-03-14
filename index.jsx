import React from "./react";
import ReactDom from "./react-dom";

const B = props => (
  <div className="alex" onClick={console.log}>
    1 {props.someProps}
  </div>
);

const A = () => (
  <div className="FirstClass">
    Alex
    <input type="text" onChange={event => console.log(event.target.value)} />
    <B someProps="Loi" />
  </div>
);

ReactDom.render(<A />, document.getElementById("root"));
