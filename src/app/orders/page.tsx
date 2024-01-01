"use client"

import React from "react";
import styles from "@/components/styles/Orders.module.css"

const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.trTitle}>
            <th >Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.confirmed}>
            <td className={styles.id}>1237861238721</td>
            <td className={styles.date}>19.07.2023</td>
            <td className={styles.price}>89.90</td>
            <td className={styles.products}>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.status}>On the way (approx. 10min)...</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.id}>1237861238721</td>
            <td className={styles.date}>19.07.2023</td>
            <td className={styles.price}>89.90</td>
            <td className={styles.products}>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.status}>On the way (approx. 10min)...</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.id}>1237861238721</td>
            <td className={styles.date}>19.07.2023</td>
            <td className={styles.price}>89.90</td>
            <td className={styles.products}>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className={styles.status}>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;