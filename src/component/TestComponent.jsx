import React, { useState } from "react";

const TestComponent = ({ TEST_name, abc }) => {
  const [component_state, setcomponentstate] = useState(TEST_name);

  return (
    <h1 onClick={() => setcomponentstate("child value chnage")}>
      
      Inside children---
      {component_state}{" "}
    </h1>
  );
};

// class Car extends React.Component {
//     render() {
//       return <h2>Hi, I am a Car!</h2>;
//     }
//   }

//   export Car;

export default TestComponent;
