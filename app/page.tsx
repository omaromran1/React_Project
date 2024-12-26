"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Description from "@/components/Description";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      if (newCounter === 10) {
        setSuccess(true);  
      }
      return newCounter;
    });
  }

  
  function handleHide() {
    setHide(!hide);
  }

  function autoFocus(){
    inputRef.current?.focus();
  }

  useEffect(() => {
    if (success) {
      console.log("SUCCESS!!");
    }
  }, [success]);

  return (
    <main>
      <div className={styles.section}>
        <Header text="ComPonent" textsub="A computer Engineer" />
        {hide && <Description />}
      </div>
      <Link href="/about">Go to About</Link>
      <br />
      <button onClick={handleHide}>
        {hide ? "Hide Description" : "Show Description"}
      </button>
      <br />
      
      
      <div>Show number: {counter}</div>
      <button onClick={handleClick}>Increment Counter</button>

      
      <br />
      <input ref={inputRef} />
      <br />
      <button onClick={autoFocus}>FOCUS ME</button>
    </main>
  );
}

export default Home;
