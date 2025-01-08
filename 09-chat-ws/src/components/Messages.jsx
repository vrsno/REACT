import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabaseClient";
import Message from "./Message";
import Header from "./Header";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  const [messages, setMessages] = useState();
  const scroll = useRef(null);

  const callSupabase = async () => {
    const { data } = await supabase.from("messages").select("*");
    setMessages(data);
    //console.log(data);
  };

  useEffect(() => {
    callSupabase();
  }, []);

  useEffect(() => {
    const chanel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          tabla: "messages",
        },
        (payload) => {
          const newMessages = payload.new;
          setMessages((messages) => [...messages, newMessages]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(chanel);
    };
  }, []);

  return (
    <section className="messages">
      <Header />
      <div className="content">
        {messages &&
          messages.map((item) => (
            <Message
              key={item.id}
              message={item.content}
              date={item.created_at}
              email={item.email}
            />
          ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </section>
  );
};
