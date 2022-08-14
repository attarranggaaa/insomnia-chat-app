import getOtherEmail from "../utils/getOtherEmail";
import { useState, createContext } from "react";
import { useRouter } from "next/router";
import { db, auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import {
  query,
  collection,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const [user] = useAuthState(auth);
  const [snapshot] = useCollection(collection(db, "chats"));
  const { id } = router.query;
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);

  const chats = snapshot?.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((chat) => chat.users.includes(user.email))
    .filter((val) => {
      const [getEmail] = getOtherEmail(val.users, user.email);
      if (search === "") {
        return val;
      } else if (getEmail.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });

  const redirect = (id) => {
    router.push(`/chat/${id}`);
  };

  const chatExist = (email) => {
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );
  };

  const sendMessage = async (input) => {
    if (input) {
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: user.email,
        timestamp: serverTimestamp(),
      });
    }
  };

  const newChat = async (input) => {
    if (input && !chatExist(input && input !== user.email)) {
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    }
  };

  const value = {
    auth,
    id,
    user,
    snapshot,
    messages,
    chats,
    redirect,
    sendMessage,
    newChat,
    setSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
