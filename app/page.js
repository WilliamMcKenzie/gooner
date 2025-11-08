"use client"

import styles from "./components/landing/style.module.css";
import Navbar from "./components/landing/navbar";

export default function Home() {
  async function generate() {
    await fetch(`/api/generate?name=William`, { method: "GET" })
  }

  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.hero}>
        <img className={styles.rizzchess} src={"rizzchess.png"}/>
        <h3>
          if tinder had elo.
        </h3>
        <button className="btn">
          try it out
        </button>
        <button className="btn">
          see devpost
        </button>
      </div>
    </main>
  );
}
