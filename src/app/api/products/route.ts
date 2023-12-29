import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/utils/connect";

// FETCH ALL PRODUCTS
export const GET = async (req:NextRequest) =>{

  const {searchParams} = new URL(req.url)
  const cat = searchParams.get("cat")

  try{
    const products = await prisma.product.findMany(
      {
        where: {
          ...(cat ? { catSlug: cat} : {price: 14})
        }
      }
    );
    return new NextResponse(JSON.stringify(products), {status:200});

  }catch (err){
    console.log(err);
    return new NextResponse(JSON.stringify({message:"Something went wrong"}), {status:500});
  }


  
}

export const Post = () =>{
  return new NextResponse("Hello", {status:200})
}