'use client'

import Link from "next/link";
import {FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse} from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import "./Sidebar.css";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];


const SideBar = () => {

    
  const handleSidebar=(arg)=>{
    console.log(arg);
  setIsOpen(arg);
  }
  
  const [isOpen, setIsOpen] = useState(false);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-w-10 pt-2 text-white bg-[#0f172a] min-h-[100vh]">
    <div className={isOpen?"absolute left-0 z-10 top-0 bottom-0 w-72 bg-[#0f172a]":"hidden"}>
      <div className="p-2 text-white font-semibold">
        <div className="flex justify-between items-center m-5">
          <span>Sincronify</span>
          <span className="px-3 font-bold py-1 rounded-lg bg-black">X</span>
        </div>
        <hr color="black"/>
        <div className="flex flex-col items-center" onMouseLeave={()=>handleSidebar(false)}>
          {routes.map((route)=>(
            <div className="w-full m-2">
              <Link href={route.path} className="w-[100%] flex justify-between items-center hover:bg-gray-900">
                <span className="">{route.name}</span>
                <span className="px-8 py-4">{route.icon}</span>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="rounded-full w-10 h-10 text-center bg-black p-2 mb-8 mx-auto">SF</div>
      <div className="flex flex-col text-xl items-center" onMouseEnter={()=>handleSidebar(true)}>
        {routes.map((route)=>(
          <Link href={route.path} className="w-[100%] flex justify-center hover:bg-gray-900">
            <span className="px-8 py-4">{route.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default SideBar;