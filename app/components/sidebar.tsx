// import { navigationLinks } from "./data/data";
import { NavigationLinks } from "./data/type";
import { IoHome } from "react-icons/io5";
import { BiSolidPaste } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaTripadvisor } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import Image from "next/image";

const navigationLinks: NavigationLinks[] = [
  { id: 1, title: "Home", image: <IoHome /> },
  { id: 2, title: "Budget", image: <BiSolidPaste /> },
  { id: 3, title: "Transactions", image: <FaPaperPlane /> },
  { id: 4, title: "Subscriptions", image: <FaRadio /> },
  { id: 5, title: "Loans", image: <FaMoneyBillWave /> },
  { id: 6, title: "Reports", image: <BiSolidReport /> },
  { id: 7, title: "Savings", image: <MdSavings /> },
  { id: 8, title: "Financial Advice", image: <FaTripadvisor /> },
  { id: 9, title: "Account", image: <MdAccountCircle /> },
  { id: 10, title: "Settings", image: <IoMdSettings /> },
];

export default function Sidebar() {
  return (
    <div className="lg:w-[260px] w-[72px transition  overflow-hidden h-screen bg-primary lg:py-[36px] lg:px-[20px] px-[12px] py-[30px]   ">
      {/* profile pic */}
      <div className="flex items-center lg:justify-start justify-center gap-[16px]  ">
        <div className=" w-[48px] h-[48px] relative overflow-hidden rounded-full   ">
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            fill
            alt="profile pic"
            className=" object-cover   "
          />
        </div>
        {/* clss */}
        <span className="text-[20px] text-white font-medium uppercase hidden lg:flex   ">
          James doe
        </span>
      </div>

      {/* nav items */}
      <div className="flex flex-col mt-[28px] items-center justify-center ">
        {navigationLinks.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center group lg:rounded-[8px] hover:bg-pumpkin
               cursor-pointer lg:h-[44px] lg:py-[6px] lg:px-[14px] justify-center lg:justify-start
                gap-[12px] border border-transparent hover:border-primar_light transition rounded-full
                w-[32px] h-[32px] lg:w-full mb-[15px] lg:mb-2 p-5 lg:p-0
                    "
            >
              <div className="[&_svg]:w-[22px] [&_svg]:h-[22px] flex items-center justify-center text-white/40 group-hover:text-white  ">
                {item.image}
              </div>
              <div className="hidden lg:flex text-white  ">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
