import Head from "next/head";
import React, { ReactNode, useState } from "react";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

type Props = {
  children: ReactNode;
  profile: any;
  onSignOut: () => void;
};

const MainLayout = ({ children, profile }: Props) => {
  const [isOpen, showDrawer] = useState(false);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Raleway:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col h-screen">
        <Header openDrawer={() => showDrawer(!isOpen)} profile={profile} />
        <main className="px-4 flex-1 overflow-y-scroll scrollbar-hide">
          {children}
        </main>
        {/* <NavBar /> */}
        <Drawer isTrigger={isOpen} closeDrawer={() => showDrawer(false)} />
      </div>
    </>
  );
};

export default MainLayout;
