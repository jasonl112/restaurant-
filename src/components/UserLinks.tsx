"use client"
import Link from "next/link"
import styles from "./styles/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const UserLinks = () =>{
  const {status} = useSession();

  return(
    <li className={styles.listItem}>
      {status == "authenticated" ? (
       <div>
          <Link href="/orders">Orders</Link>
          <span className={styles.listItem} onClick={()=>signOut()}>Logout</span>
        </div>):(<Link href="/login">Log in
      </Link>)}
    </li>
  )
}

export default UserLinks