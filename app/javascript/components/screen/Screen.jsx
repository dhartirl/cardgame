import React from 'react';
import Chat from "../chat/Chat";

const Screen = ({chatChannel, children}) => {
  return <div className="Screen">
    <div className="Screen-navBar"></div>
    <div className="Screen-container">
      <div className="Screen-content">
        {children}
      </div>
      <div className="Screen-sidebar">
        <Chat channel={chatChannel} />
      </div>
    </div>
  </div>
}

export default Screen;