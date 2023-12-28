"use client"

import styles from "../components/styles/Product.module.css";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number; }[]
}

const Price = ( {price, id, options}: Props) => {
  const [total, setTotal] = useState(price);
  const [extraPrice, setExtrasPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    setTotal(
      quantity * (options ? extraPrice: price)
    )
  }), [quantity, options, price]

  const changePrice = (additional:number) => {
    setExtrasPrice((extraPrice + additional));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, option: { title?: string; additionalPrice: any; }) => {
    const checked = e.target.checked;
    if (checked){
        changePrice(option.additionalPrice);
        extras.push(option.title);
        console.log(extras);
    }else
    {
      changePrice(-option.additionalPrice);
      extras.filter((extra) => extra.title!== option.title);
      console.log(extras);
    }
  }

  return (
    <>
    <span className={styles.price}>{total.toFixed(2)}</span>
    <h3 className={styles.choose}>Choose additional ingredients</h3>
    <div className={styles.ingredients}>
          {options!.map((option, index) => (
            <div className={styles.option} key={index}>
              <input
                type="checkbox"
                id={option.title}
                name={option.title}
                className={styles.checkbox}
                onChange={(e) => {handleChange(e, option)}}
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