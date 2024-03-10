import { useState } from "react";

const Start = ({setUsername}) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setUsername(text)
  }

  return (
    <div className="start">
      <input
        type="text"
        placeholder="Adınızı Yazınız"
        className="startInput"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="startButton" onClick={handleClick}>Başla</button>
    </div>
  );
};

export default Start;
