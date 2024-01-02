"use client"
import styles from "@/components/styles/Cart.module.css";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const Cart = () => {
  const {products, totalItems, totalPrice, removeFromCart} = useCartStore();
  const {data:session} = useSession();
  const router = useRouter();

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data =await res.json()
        router.push(`/pay/${data.id}`)
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          <tbody>
            {products.map((item) =>(
              <tr className={styles.tr} key={item.id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{item.title}</span>
                <div className={styles.extras}>
                  {item.options.map((option) => (
                    <span>{option.title} </span>
                  ))}
                </div>
              </td>
              <td>
                <span className={styles.quantity}>{item.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>{item.price}</span>
              </td>
              <td>
                <span className={styles.remove} onClick={()=>removeFromCart(item)}>X</span>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            ({totalItems} items) ${totalPrice}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${totalPrice}
          </div>
          <button className={styles.button} onClick={handleCheckout}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;