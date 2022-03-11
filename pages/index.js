import Head from "next/head";
import Image from "next/image";
import WelcomeScreen from "../components/WelcomeScreen";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <WelcomeScreen /> */}
      <div className="w-full h-screen bg-red-50 flex items-center justify-center">
        This is main content
      </div>
    </div>
  );
}
