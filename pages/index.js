import { useContext } from "react";

import PhoneForm from "../components/phoneform";
import Redeemed from "../components/redeemed";
import styles from "../styles/Home.module.css";
import AppContext from "../context/AppContext";

import Head from 'next/head'

export default function Home() {
  const appContext = useContext(AppContext);
  return (
    <div className="main">
       <Head>
        <title>GoKwik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="mt-10 w-full z-100">
          <img
            style={{ width: "15rem", margin: "0 auto" }}
            src="/man-matters.png"
            alt="Man Matters"
          />
        </div>
        <div className="z-100 w-full text-center  mt-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-500 text-3xl font-black">
            Congratulations{" "}
          </span>
          <span className="text-3xl font-black">🥳</span>
        </div>
      </div>

      <div className="formcontainer w-3/4 mx-auto flex flex-col lg:flex-row mt-10">
        <div className="w-full items-center">
          <div className="rounded-full ">
          {appContext.redeemed ? <Redeemed/> : <PhoneForm/>}
          </div>
        </div>
      </div>
      <div
        style={{ top: 0, zIndex: "-1" }}
        className="h-80 bg-gradient-to-r from-black via-gray-900 to-black h-112 text-center absolute w-full"
      ></div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
