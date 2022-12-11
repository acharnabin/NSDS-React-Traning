import React, { useState } from "react";

const RecentCardComponent = ({ title, data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="mt-2 p-1">
      <div className="p-1  text-primary d-flex justify-content-between">
        <b>{title}</b>
        <button onClick={handleOpen} className={open?"btn btn-danger":"btn btn-primary"}>
          {open?"Close":"Open"}
        </button>
      </div>

      {open && (
        <ul className="list-group list-group-flush">
          {data?.map((item) => {
            return <li class="list-group-item">{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default RecentCardComponent;
