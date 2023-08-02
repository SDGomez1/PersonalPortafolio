"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Navbar />
      </main>
    </Provider>
  );
}
