"use client"

import { ProductType } from "@/types/types";
import styles from "../components/styles/Product.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import { useCartStore } from "@/utils/store";
import { toast } from "react-toastify";


const Price = ( {product}: {product:ProductType}) => {

  const price = Number(product.price);
  const [total, setTotal] = useState(price);
  const [extraPrice, setExtrasPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const {addToCart} = useCartStore();

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

  useEffect(() => {
    setTotal(
      quantity * (product.options ? extraPrice: price)
    )
  }), [quantity, product.options, price]

  const changePrice = (additional:number) => {
    setExtrasPrice((extraPrice + additional));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, option: { title?: string; additionalPrice: any; }) => {
    const checked = e.target.checked;
    if (checked){
        changePrice(option.additionalPrice);
        setExtras([...extras, option]);
    }
    else
    {
      changePrice(-option.additionalPrice);
      console.log(extras);
      setExtras(extras.filter((extra) => extra.title !== option.title))
    }
  }

  console.log(extras);

  const handleCart = () =>{
    addToCart(
      {
        id: product.id,
        title: product.title,
        img: product.img,
        price: total,
        options: extras,
        quantity: quantity,
      }),
      toast.success("The product added to the cart");
  }

  return (
    <>
    <span className={styles.price}>{total}</span>
    <h3 className={styles.choose}>Choose additional ingredients</h3>
    <div className={styles.ingredients}>
          {product.options!.map((option, index) => (
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
            <button className={styles.button} onClick={()=>{handleCart()}}>Add to Cart</button>
        </div>
    </>
  );
};

export default Price;