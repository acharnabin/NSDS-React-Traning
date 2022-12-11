import React from "react";
import { photoUrl } from "../../api/url";

const PostCard = ({ item }) => {
  return (
    <div className="card mt-2">
      <img className="card-img-top" src={`${photoUrl}/${item?.image}`} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{item?.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
