import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./loading";


async function fetchProduct() {
  const users = await fetch("https://api.escuelajs.co/api/v1/users", {
    cache: "no-store"
  });
  const res = await users.json();
  return res.users;
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