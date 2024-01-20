import React from "react";
import Reminder from "../images/reminder.svg";
import addCollaborator from "../images/add-collaborator.svg";
import Palette from "../images/palette.svg";
import AddImage from "../images/add-image.svg";
import More from "../images/more.svg";
import Undo from "../images/undo.svg";
import Redo from "../images/redo.svg";

export default function BottomBar() {
  return (
    <footer className="bottom-bar-container">
      <img className="icon" src={Reminder} />
      <img className="icon" src={addCollaborator} />
      <img className="icon" src={Palette} />
      <img className="icon" src={AddImage} />
      <img className="icon" src={More} />
      <div>
        <img className="icon" src={Undo} />
        <img className="icon" src={Redo} />
      </div>
    </footer>
  );
}
