import { LoadableContext } from 'next/dist/shared/lib/loadable-context.shared-runtime';
import Link from 'next/link'
import React from 'react'
import LoadingComponent from '../loading';
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";

async function fetchProduct() {
  const users = await fetch("https://api.escuelajs.co/api/v1/users", {
    cache: "no-store"
  });
  const res = await users.json();
  console.log(res);
  return res;
}

 export default async function ProductPage ()  {
  const product = await fetchProduct();
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => (
          <CardComponent
            avatar={pro.avatar}
            name={pro.name}
            key={pro.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}


