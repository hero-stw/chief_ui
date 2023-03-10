import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {};

const Unauthorized = (props: Props) => {
  const router = useRouter();
  return (
    <div className="max-w-[600px] mx-auto grid min-h-screen place-content-center ">
      <Head>
        <title>OrderMe - Shipper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen relative h-[300px] mb-8">
        <Image
          className="block"
          src={"/img/loading-graphic.svg"}
          objectFit={"contain"}
          layout={"fill"}
        />
      </div>
      <div className="content grid place-content-center text-center">
        <h1 className="font-pr text-gray-900 font-bold text-[3rem]">
          Unauthorized
        </h1>
        <p className="font-pr">Hình như bạn đi lạc rùi đúng không?</p>
      </div>
      <div
        className="btn-wr mt-[3rem] text-center"
        onClick={() => router.push("/")}
      >
        <button className="bg-yell font-bold text-white px-[1.5rem] py-[0.8rem] font-pr hover:bg-gray-900 ease-linear duration-300">
          Go back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
