import React, { useState } from "react";

function AttachmentMenu() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button>Send</button>
      {selectedFile && (
        <p>
          Selected file: {selectedFile.name} ({selectedFile.type})
        </p>
      )}
    </div>
  );
}

export default AttachmentMenu;
