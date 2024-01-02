import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link"
import UserLinks from "./UserLinks";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return(
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.contactinfo}>
          <p>
            Reservations encouraged, walk-ins welcome. Please call 
            (469) 564-8588
            or reserve online.
          </p>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <Link href="/">
          <div className={styles.item}>
            <Image src="/img/logo.png" width="200" height="60" alt="logo"></Image>
          </div>
        </Link>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}><Link href="/">Home</Link></li>
            <li className={styles.listItem}><Link href="#menu">Menu</Link></li>
            <li className={styles.listItem}>Contact</li>
            <UserLinks/>
            <li className={styles.listItem}><Link href="/menu">Order</Link></li>
            <li className={styles.listItem}>
            <Link href="/cart">
              <CartIcon/>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Navbar;