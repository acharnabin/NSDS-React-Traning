import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData, isLoggedIn } = useSelector((s) => s.user);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 ">
          <ul className="list-group">
            <li className="list-group-item active">{userData?.email}</li>
            <li className="list-group-item">{userData?.fullName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
