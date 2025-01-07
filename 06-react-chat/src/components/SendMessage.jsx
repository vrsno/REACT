import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import EmojiPicker from "emoji-picker-react";

export const SendMessage = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState("close");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      photo: photoURL,
      timesstamp: serverTimestamp(),
    });
    setInput("");
  };

  const emoji = () => {
    setOpen("open");
  };
  const closeEmoji = () => setOpen("close");
  const onEmojiclick = (event, emojiObject) => {
    setInput(`${input}${emojiObject.emoji}`);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <button type="button" className="btn-emoji" onClick={emoji}>
        <i className="fa-solid fa-face-smile"></i>
      </button>
      <div className={open}>
        <button type="button" className="close-emoji" onClick={closeEmoji}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <EmojiPicker onEmojiclick={onEmojiclick} />
      </div>

      <input
        type="text"
        placeholder="Enter your message here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">send</button>
    </form>
  );
};
