import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutCard from "../../component/AboutCardComponent/AboutCard";
import AboutUSChild1 from "../../component/child/AboutUSChild1";


const About = () => {
  //const [counter, setcounter] = useState(1);

  const dispatch = useDispatch();

  const incr = () => {
   
  };

  return (
    <div className="container p-2">
     
      <button onClick={incr}>+</button>

      <AboutUSChild1/>
    </div>
  );
};

export default About;
