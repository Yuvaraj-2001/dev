

import React, { useState, useRef } from "react";

const MediumLikeEditor = () => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const editorRef = useRef();

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const range = selection.rangeCount ? selection.getRangeAt(0) : null;

    if (selectedText && range) {
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top + window.scrollY - 40, // Position toolbar above selection
        left: rect.left + rect.width / 2, // Center the toolbar horizontally
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false); // Hide toolbar if no text is selected
    }
  };

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
    setShowToolbar(false); // Hide toolbar after applying formatting
  };

  const handleAddLink = () => {
    setShowLinkInput(true);
  };

  const insertLink = () => {
    if (linkUrl.trim()) {
      document.execCommand("createLink", false, linkUrl);
    }
    setShowLinkInput(false);
    setLinkUrl("");
    setShowToolbar(false); // Hide toolbar after inserting link
  };

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onMouseUp={handleTextSelection}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          minHeight: "150px",
          cursor: "text",
          margin: "20px 0",
        }}
      >
        Select some text to see the toolbar and apply formatting or add a link.
      </div>

      {showToolbar && (
        <div
          style={{
            position: "absolute",
            top: toolbarPosition.top,
            left: toolbarPosition.left,
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            display: "flex",
            gap: "10px",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => applyFormatting("bold")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <b>B</b>
          </button>
          <button
            onClick={() => applyFormatting("italic")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <i>I</i>
          </button>
          <button
            onClick={() => applyFormatting("underline")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <u>U</u>
          </button>
          <button
            onClick={handleAddLink}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            🔗
          </button>
        </div>
      )}

      {showLinkInput && (
        <div
          style={{
            position: "absolute",
            top: toolbarPosition.top + 50,
            left: toolbarPosition.left,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "5px",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <input
            type="text"
            placeholder="Enter URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            style={{
              padding: "5px",
              marginRight: "5px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <button
            onClick={insertLink}
            style={{
              padding: "5px 10px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default MediumLikeEditor;
