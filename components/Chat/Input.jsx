import { useState, useContext } from "react";
import { AppContext } from "../../context";

const Input = () => {
  const { sendMessage } = useContext(AppContext);

  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    sendMessage(input);
    setInput("");
  };
  return (
    <>
      <form
        className="px-8 basis-28 flex items-center space-x-4 bg-base-300"
        onSubmit={send}
      >
        <input
          type="text"
          placeholder="Type a message"
          className="bg-base-200 focus:outline-none input w-full"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="btn btn-primary px-10">Send</button>
      </form>
    </>
  );
};

export default Input;
