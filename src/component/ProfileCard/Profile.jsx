import React from "react";

const Profile = () => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Nabin achar</h5>
        <p className="card-text">
          this is description
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Profile;
