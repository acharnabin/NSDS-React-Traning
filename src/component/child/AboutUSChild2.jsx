import React from "react";
import { useDispatch, useSelector } from "react-redux";


const AboutUSChild2 = () => {
 
  const dispatch = useDispatch();

  const incr = () => {
   
  };
  return (
    <div className="card p-2 mt-2">
     
      <button onClick={incr}>+</button>
    </div>
  );
};

export default AboutUSChild2;
