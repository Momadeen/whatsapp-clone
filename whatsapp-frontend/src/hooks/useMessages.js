import Pusher from "pusher-js";
import { useEffect, useMemo, useState } from "react";
import axios from "../axios";

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res?.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("826d6dd4bf38d1bb46b3", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    };
  }, [messages]);

  const lastMessage = useMemo(
    () => messages?.length > 0 && messages[messages?.length - 1],
    [messages]
  );

  return { messages, lastMessage };
};

export default useMessages;
