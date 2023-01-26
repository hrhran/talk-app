import React from "react";

import ActiveMembers from "./helpers/ActiveMembers/ActiveMembers";
import ChatList from "./helpers/ChatList/ChatList";

import "./ServerDetailsBody.scss";

const ServerDetailsBody = () => {
  return (
    <div className="server_details_body">
      <ChatList />
      <ActiveMembers />
    </div>
  )
}

export default ServerDetailsBody;