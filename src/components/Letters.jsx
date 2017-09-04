import React from "react";
import Letter from "./Letter";

const Letters = props => {
  return (
    <div className="letters">
      {props.letters.split("").map((e, i) => <Letter key={i} letter={e} />)}
    </div>
  );
};

export default Letters;
