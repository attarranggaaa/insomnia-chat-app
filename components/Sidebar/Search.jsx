import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { AppContext } from "../../context";

const Search = () => {
  const { setSearch } = useContext(AppContext);
  return (
    <>
      <div className="flex items-center bg-base-200 px-4 rounded-lg w-full space-x-4">
        <IoSearchSharp className="w-6 h-6 " />
        <input
          type="text"
          placeholder="Search"
          className="input focus:outline-none w-full px-0 bg-base-200"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
