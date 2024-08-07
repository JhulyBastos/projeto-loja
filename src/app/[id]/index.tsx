"use client";
import { shoes } from "@/data/shoes";
import { Shoe } from "@/types/Shoe";
import {
  UserRound,
  Package,
  CircleDollarSign,
  ShoppingCart,
  MoveRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function TennisInformation() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.replace("/", "");
  const [shoe, setShoe] = useState<Shoe>();
  useEffect(() => {
    if (id) {
      const foundShoe = shoes.find(
        (shoe) => shoe.id === parseInt(id as string)
      );
      setShoe(foundShoe);
    }
  }, [id]);

  if (!shoe) {
    return <div>Carregando...</div>;
  }
  return (
    <main className="w-full h-screen">
      <div className=" bg-black flex justify-center items-center">
        <div>
          <div className="flex justify-center gap-5 py-2 text-black">
            <button className="flex justify-center gap-2">
              <ShoppingCart /> Carrinho
            </button>
            <MoveRight />
            <button className="flex justify-center gap-2">
              <UserRound /> Identificação
            </button>
            <MoveRight />
            <button className="flex justify-center gap-2">
              <Package /> Envio
            </button>
            <MoveRight />
            <button className="flex justify-center gap-2">
              <CircleDollarSign /> Pagamento
            </button>
          </div>
        </div>
        <div className="text-black">
          {" "}
          <img className="w-[200px] h-[300px]" src={shoe.imagem} alt="" />
        </div>
      </div>
    </main>
  );
}
