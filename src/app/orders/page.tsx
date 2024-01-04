"use client"

import React from "react";
import styles from "@/components/styles/Orders.module.css"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const OrdersPage = () => {

  const {data:session,status} = useSession();

  const router = useRouter();

  if (status ==="unauthenticated"){
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn:({id,status}:{id:string, status:string}) =>{
      return fetch(`http://localhost:3000/api/orders/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(status),
      });
    },
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ["orders"]});
    },
  })

  
  
  const handleUpdate = (e:React.FormEvent<HTMLFormElement>, id:string) =>{
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({id,status});
    toast.success("The order status has been changed!")

  }

  if (isLoading || status === "loading") return "Loading...";

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
          {data.map((item:OrderType)=>
          (<tr className={styles.confirmed} key={item.id}>
            <td className={styles.id}>{item.id}</td>
            <td className={styles.date}>{item.createdAt.toString().slice(0,10)}</td>
            <td className={styles.price}>{item.price}</td>
            <td className={styles.products}>{item.products.map((product) => (
              <span>{product.title}</span>
            ))}</td>
            {session?.user.isAdmin ? (
              <td>
                <form className={styles.form} onSubmit={(e)=>handleUpdate(e, item.id)}
                >
                  <input placeholder={item.status} className={styles.input}/>
                  <button className={styles.edit}>
                    <Image src="/img/edit.png" alt="" width={20} height={20}/>
                  </button>
                </form>
                
              </td>
              
            ): (<td className={styles.status}>{item.status}</td>)
            }
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;