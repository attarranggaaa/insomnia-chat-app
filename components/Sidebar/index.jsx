import People from "./People";
import Profile from "./Profile";
import Search from "./Search";
import getOtherEmail from "../../utils/getOtherEmail";
import { useRouter } from "next/router";
import Modal from "./Modal";
import { AppContext } from "../../context";
import { useContext } from "react";

const Sidebar = () => {
  const { user, chats, redirect } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-between lg:col-span-2 col-span-3 flex-col bg-base-300 border-base-100 h-screen max-h-screen border-r-2">
        <div className="flex items-center basis-28  px-8">
          <Search />
        </div>
        <Modal />
        <div className="scrollbar-thin scrollbar-thumb-primary2 flex flex-col h-full max-h-full basis-full">
          {chats?.map((chat) => (
              <People
                key={Math.random()}
                email={getOtherEmail(chat.users, user.email)}
                action={() => redirect(chat.id)}
              />
            ))}
        </div>
        <div className="flex h-28 items-center px-8 w-full">
          <Profile />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
