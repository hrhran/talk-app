import React from "react";

import ServerDetailsHeader from "./helpers/Header/ServerDetailsHeader";
import ServerDetailsBody from "./helpers/Body/ServerDetailsBody.js";

import "./ServerDetails.scss";

const ServerDetails = () => {
  return (
    <div className="server_details">
      <ServerDetailsHeader />
      <ServerDetailsBody />
    </div>
  );
}

export default ServerDetails;