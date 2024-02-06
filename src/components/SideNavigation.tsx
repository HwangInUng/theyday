import Image from "next/image";
import MainLogo from "../assets/main-logo.png";
import { BsCartFill } from "react-icons/bs";

const SideNavigation = () => {
  const menu = ["픔목관리", "매출관리", "예약관리", "재료관리"];
  return (
    <div className="flex flex-col w-[250px] h-screen bg-white border-r rounded-r-lg overflow-hidden border-orange-100 flex-shrink-0 shadow-lg shadow-orange-300">
      <div className="h-[150px] flex justify-center items-center">
        <Image
          src={MainLogo}
          alt="main logo"
          className="w-[100px] h-[100px] rounded-[50%] border border-orange-200"
        />
      </div>
      <div className="flex-grow">
        <ul className="h-full flex flex-col gap-y-2 text-lg py-2 pr-2">
          {menu.map((m, index) => (
            <li
              key={index}
              className="py-2 px-2 rounded-r-lg hover:bg-orange-100 text-slate-500 hover:text-orange-500 transform duration-200 cursor-pointer"
            >
              <div className="pl-4 hover:border-r-[3px] hover:border-orange-500 flex items-center gap-x-3">
                <BsCartFill className="scale-110" />
                <span>{m}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
