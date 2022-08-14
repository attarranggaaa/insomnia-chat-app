import { useContext } from "react";
import { AppContext } from "../../context";
import { db } from "../../firebase-config";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import getOtherEmail from "../../utils/getOtherEmail";
import { IoPersonCircle } from "react-icons/io5";

const Person = () => {
  const { id, user } = useContext(AppContext);

  const [chat] = useDocumentData(doc(db, "chats", id));
  const recipient = getOtherEmail(chat?.users, user.email);

  return (
    <>
      <div className="flex space-x-4 justify-between items-center w-full">
        <div className="flex items-center space-x-4 truncate">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <IoPersonCircle className="w-full h-full" />
            </div>
          </div>
          <h2 className="font-semibold truncate">{recipient}</h2>
        </div>
      </div>
    </>
  );
};

export default Person;
