import { useContext } from "react";
import { AppContext } from "../../context";

const Message = ({ text, sender, timestamp }) => {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className={`w-full flex ${sender === user.email && "justify-end"}`}>
        <div
          className={` w-fit lg:max-w-md max-w-full text-clip py-2 px-5 rounded-lg ${
            sender === user.email ? "bg-accent rounded-br-none text-black" : "bg-base-100 rounded-bl-none"
          }`}
        >
          <p className="break-words">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
