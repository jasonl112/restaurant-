"use client"

import styles from "../components/styles/Product.module.css";
import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number; }[]
}

const Price = ( {price, id, options}: Props) => {
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }), [quantity, selected, options, price]



  return (
    <>
    <span className={styles.price}>{total.toFixed(2)}</span>
    <h3 className={styles.choose}>Choose additional ingredients</h3>
    <div className={styles.ingredients}>
          {options!.map((option, index) => (
            <div className={styles.option} onClick={()=> setSelected(index)}>
              <input
                type="checkbox"
                id={option.title}
                name={option.title}
                className={styles.checkbox}
              />
              <label htmlFor={option.title}>{option.title}</label>
           </div>
          ))}
      </div>
      <div className={styles.add}>
            <div className="">
              <span>Quantity</span>
              <div className="">
                <button
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  {"<"}
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
                >
                  {">"}
                </button>
              </div>
            </div>
            <button className={styles.button}>Add to Cart</button>
        </div>
    </>
  );
};

export default Price;