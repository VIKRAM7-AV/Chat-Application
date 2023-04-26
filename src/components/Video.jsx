import React, { useState } from "react";
import AttachmentMenu from "./AttachmentMenu";

function ChatApp() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <i className="fa fa-paperclip" aria-hidden="true"></i>
      </button>
      {showMenu && <AttachmentMenu />}
    </div>
  );
}

export default ChatApp;
