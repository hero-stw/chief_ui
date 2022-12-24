import Image from "next/image";
import React from "react";
import SettingsIcon from "../icons/Settings";
import styles from "./Header.module.css";
type Props = {
  openDrawer: () => void;
  profile: any;
};

const Header = ({ openDrawer, profile }: Props) => {
  console.log(profile);

  return (
    <div className={styles.shadow + " px-4 py-3 bg-gray-50 flex items-center"}>
      <div className="overflow-hidden relative w-[40px] h-[40px] grid place-content-center ">
        👋🏻
      </div>
      <div className="pl-2">
        <p className="text-gray-400 font-pr text-[12px]">Hello, </p>
        <h1 className="text-md font-bold text-purple font-pr">
          {profile.name}
        </h1>
      </div>
      <button
        type="button"
        className="overflow-hidden relative ml-auto"
        data-drawer-target="drawer-bottom-example"
        data-drawer-show="drawer-bottom-example"
        data-drawer-placement="bottom"
        aria-controls="drawer-bottom-example"
        onClick={() => openDrawer()}
      >
        <SettingsIcon />
      </button>
    </div>
  );
};

export default Header;
