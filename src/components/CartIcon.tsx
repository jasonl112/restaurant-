"use client"

import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link"
import UserLinks from "./UserLinks";
import { useCartStore } from "@/utils/store";
import { useEffect } from "react";

const Navbar = () => {
  const {totalItems} = useCartStore();

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

  return(
  <div className={styles.cart}>
    <Image src="/img/cart.png" width="30" height="30" alt="cart"></Image>
    <div className={styles.counter}>{totalItems}</div>
  </div>
  )
}


export default Navbar;