import React from "react";
import ServerDetails from "./helpers/ServerDetails/ServerDetails";
import ServerInfo from './helpers/ServerInfo/ServerInfo';
import './RightPanel.scss';

const RightPanel = () => {
  return (
    <div className="right_panel">
      <ServerInfo />
      <ServerDetails />
    </div>
  )
}

export default RightPanel;