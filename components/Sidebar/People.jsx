import { IoPersonCircle } from "react-icons/io5";

const People = ({ email, action }) => {
  return (
    <>
      <div
        className="w-full max-w-full flex justify-start  items-center cursor-pointer space-x-2 px-8 py-2 hover:bg-base-200"
        onClick={action}
      >
        <div className="avatar">
          <div className="w-12 rounded-full">
            <IoPersonCircle className="w-full h-full" />
          </div>
        </div>
        <div className="space-y-1 w-full max-w-full truncate">
          <h3 className="text-sm text-primary-content/70 font-base truncate">
            {email}
          </h3>
        </div>
      </div>
    </>
  );
};

export default People;
