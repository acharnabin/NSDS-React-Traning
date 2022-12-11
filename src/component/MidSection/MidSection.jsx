import React from "react";
import NewsComponent from "../NewsComponent/NewsComponent";
import PostCard from "../postcard/PostCard";
import PostComponent from "../PostComponent/PostComponent";
import Profile from "../ProfileCard/Profile";
import RecentComponent from "../RecentComponent/RecentComponent";

const MidSection = () => {



  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-3">
         <Profile/>
         <RecentComponent/>
        </div>
        <div className="col-xs-12 col-md-6">
          <PostComponent/>
        </div>
        <div className="col-xs-12 col-md-3 p-2">
         <NewsComponent/>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
