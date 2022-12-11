import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AboutUSChild2 from "./AboutUSChild2";

const AboutUSChild1 = () => {

  const dispatch = useDispatch();

  const incr = () => {
    
  };
  return (
    <div className="card p-2">
    
      <button onClick={incr}>+</button>

      <AboutUSChild2  />
    </div>
  );
};

export default AboutUSChild1;
