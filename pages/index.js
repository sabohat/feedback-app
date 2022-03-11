import Head from "next/head";
import Image from "next/image";
import WelcomeScreen from "../components/WelcomeScreen";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="w-full flex items-center justify-center">
        <WelcomeScreen />
      </div>
    </div>
  );
}
