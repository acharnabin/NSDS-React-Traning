import React from "react";

const Listitem = ({ msg, time, number, textColor, textColor2 }) => {
  return (
    <li
      onClick={() => {
        console.log("li cliked");
      }}
    >
      <h5 className="text-muted">{msg}</h5>
      <p>
        <span className={textColor}>{time} ago</span>
        <span className={textColor2}>-{number} readers</span>
      </p>
    </li>
  );
};

export default Listitem;
