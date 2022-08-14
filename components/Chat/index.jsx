import Input from "./Input";
import Message from "./Message";
import Person from "./Person";
import { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context";

const Chat = () => {
  const { messages } = useContext(AppContext);
  const toBottom = useRef();

  useEffect(() => {
    setTimeout(
      toBottom.current.scrollIntoView({ behavior: "smooth", block: "start" }),
      100
    );
  }, [messages]);

  return (
    <>
      <div className="lg:col-span-4 col-span-3  flex flex-col h-screen max-h-screen">
        <div className="flex items-center basis-28 px-8 border-base-100 bg-base-300 border-b-2">
          <Person />
        </div>
        <div className="scrollbar-thin scrollbar-thumb-primary2 basis-full overflow-auto bg-base-300 px-8 py-4 space-y-4">
          {messages?.map((msg, i) => (
            <Message
              key={Math.random()}
              text={msg.text}
              sender={msg.sender}
              timestamp={msg.timestamp}
            />
          ))}
          <div ref={toBottom}></div>
        </div>

        <Input />
      </div>
    </>
  );
};

export default Chat;
