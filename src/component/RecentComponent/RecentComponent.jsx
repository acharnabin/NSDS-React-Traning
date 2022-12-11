import React from "react";
import RecentCardComponent from "./RecentCardComponent";

let RecentData = [
  "Test follw",
  "Test follw3",
  "test folle",
  "fberhfbe",
  "dnewdeewk",
];
let GroupData = [
  "Test follw",
  "Test follw3",
  "test folle",
  "Test follw",
  "Test follw3",
  "test folle",
];
let FollwedData = ["Test follw", "Test follw3", "test folle"];

const RecentComponent = () => {
  return (
    <div className="mt-3 card">
      <RecentCardComponent title="Recent" data={RecentData} />
      <RecentCardComponent title="Groups"  data={GroupData}  />
      <RecentCardComponent title="Follwed by" data={FollwedData} />
    </div>
  );
};

export default RecentComponent;
