"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../components/styles/Login.module.css"
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const {data, status} = useSession();
  const router = useRouter();
  

  if (status == "loading"){
    return <p>Loading...</p>
  }
  if (status == "authenticated"){
    router.push("/")
  }
  console.log("data: " + data);
  console.log("status: " + status);

  return (
    <div className={styles.container}>
      {/* BOX */}
      <div className={styles.card}>
        {/* IMAGE CONTAINER */}
        <div className={styles.imgContainer}>
          <Image src="/img/loginBg.jpg" alt="" layout="fill" className={styles.image}/>
        </div>
        {/* FORM CONTAINER */}
        <div className={styles.form}>
          <h1 className={styles.title}>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className={styles.button} onClick={()=>signIn("google")}>
            <Image
              src="/img/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className={styles.button}>
            <Image
              src="/img/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;