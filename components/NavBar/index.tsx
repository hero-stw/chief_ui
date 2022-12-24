import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { VscHistory, VscAccount, VscBell, VscHome } from "react-icons/vsc";

import styles from "./NavBar.module.css";
type Props = {};
const menuItems = [
  {
    id: 1,
    icon: (
      <VscHome
        color="#ffffff"
        size={24}
        className="grid place-content-center"
      />
    ),
    label: "Home",
    url: "/home",
  },
  {
    id: 2,
    icon: (
      <VscHistory
        color="#ffffff"
        size={24}
        className="grid place-content-center"
      />
    ),
    label: "History",
    url: "/history",
  },
  {
    id: 3,
    icon: (
      <VscBell
        color="#ffffff"
        size={24}
        className="grid place-content-center"
      />
    ),
    label: "Noti",
    url: "/notification",
  },
  {
    id: 4,
    icon: (
      <VscAccount
        color="#ffffff"
        size={24}
        className="grid place-content-center"
      />
    ),
    label: "Account",
    url: "/account",
  },
];
const NavBar = (props: Props) => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div
      className={
        styles.navBackground +
        " px-4 py-4 mx-2 flex justify-between gap-4 rounded-full mb-2"
      }
    >
      {menuItems.map((item: any, index: number) => (
        <Link key={index} href={item.url}>
          <div
            className={`button-item flex justify-center items-center flex-col text-center p-2 rounded-full ${
              router.asPath === item.url && "bg-[#FFDD81]"
            }`}
          >
            {item.icon}
            {/* <p className="text-[12px] font-bold text-purple font-pr mt-1">Home</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
