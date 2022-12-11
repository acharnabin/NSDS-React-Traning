import React from "react";

const AboutCard = ({item2}) => {
  return (
    <div className="card mt-2">
      <div className="card-header">
        <h1 className={item2?.id % 2 === 0 ? "text-success" : "text-danger"}>
          {" "}
          {item2?.id}
        </h1>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item2?.title}</h5>
        <p className="card-text">{item2?.body}</p>
      </div>
    </div>
  );
};

export default AboutCard;
