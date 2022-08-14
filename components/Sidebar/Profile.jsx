import { IoExitOutline, IoPersonCircle } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../../context";
import { auth } from "../../firebase-config";

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <div className="flex bg-base-100 space-x-2 items-center w-full rounded-lg py-2 px-4">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <IoPersonCircle className="w-full h-full" />
          </div>
        </div>

        <h2 className="font-semibold text-sm truncate w-full">
          {user.displayName}
        </h2>
        <div>
          <IoExitOutline
            className="w-5 h-5 cursor-pointer hover:text-error"
            onClick={() => signOut(auth)}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
