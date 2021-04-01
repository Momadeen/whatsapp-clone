import React, { useCallback, useState } from "react";
import styles from "../../chat.module.scss";
import { InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../../../axios";

const InputComponent = () => {
  const [input, setInput] = useState("");
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (input === "" || input === " ") return;
      await axios.post("/messages/new", {
        name: "Hassanien",
        message: input,
        timestmp: "1/20/215",
        received: false,
      });
      setInput("");
    },
    [input]
  );
  return (
    <div className={styles.footer}>
      <InsertEmoticon className={styles.icon} />
      <form
        onSubmit={onSubmit}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
        <input value={input} placeholder="Type a message" type="text" />
        <button>Send a message</button>
      </form>
      <MicIcon className={styles.icon} />
    </div>
  );
};

InputComponent.propTypes = {};

export default InputComponent;
