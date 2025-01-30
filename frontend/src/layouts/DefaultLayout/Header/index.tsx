import { IoIosNotifications, IoIosAdd } from "react-icons/io";
import logo from "../../../assets/logo.png";

const Header = () => (
  <div className="min-w-full justify-between flex absolute top-0 p-2">
    <div>
      <img src={logo} alt="logo" className="w-40" />
    </div>
    <div className="flex gap-3 items-center justify-center">
      <IoIosAdd className="size-8 cursor-pointer hover:rotate-45 duration-100" />
      <IoIosNotifications className="size-8" />
      <div className="size-8 cursor-pointer bg-purple-600 rounded-full flex items-center justify-center">
        <b className="text-white text-xs">MR</b>
      </div>
    </div>
  </div>
);

export default Header;
