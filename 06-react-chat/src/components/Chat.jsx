import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { Message } from "./Message";
import { SendMessage } from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timesstamp"));

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentmessages = [];
      querySnapshot.forEach((item) => {
        currentmessages.push({ content: item.data(), id: item.id });
      });
      setMessages(currentmessages);
    });
    return unsubscribe;
  }, []);

  return (
    <section className="chat-content">
      {messages &&
        messages.map((item) => (
          <Message key={item.id} message={item.content} />
        ))}
      {user && <SendMessage />}
    </section>
  );
};
