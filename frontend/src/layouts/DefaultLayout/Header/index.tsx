import { IoIosNotifications, IoIosAdd } from 'react-icons/io';
import logo from '../../../assets/logo.png';
import useMediaQuery from '../../../hooks/useMediaQuery.ts';
import { SetStateAction, FC, Dispatch } from 'react';

type HeaderProps = {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const CustomHeader: FC<HeaderProps> = ({ setIsDrawerOpen }) => {
  const isSmallDevice = useMediaQuery('max', 'width', 768);

  return (
    <div className="justify-between flex ">
      {/* fix for logo */}
      <div className="">
        <img src={logo} alt="logo" className="w-40" />
      </div>
      <div className="flex gap-3 items-center justify-center px-2">
        <IoIosAdd className="size-8 cursor-pointer hover:rotate-45 duration-100" />
        <IoIosNotifications className="size-8" />
        <div
          onClick={!isSmallDevice ? () => {} : () => setIsDrawerOpen(true)}
          className="size-8 cursor-pointer bg-purple-600 rounded-full flex items-center justify-center"
        >
          <b className="text-white text-xs">MR</b>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
