"use client";
import { Button } from "@/components/Button";
import CartSteps from "@/components/CartSteps";
import { Input } from "@/components/Input";
import Payment from "@/components/Payment";
import Profile from "@/components/Profile";
import ShippingDetails from "@/components/ShippingDetails";
import { shoes } from "@/data/shoes";
import { Shoe } from "@/types/Shoe";
import {
  UserRound,
  Package,
  CircleDollarSign,
  ShoppingCart,
  MoveRight,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TennisInformation() {
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
    <main className="w-full h-screen bg-white">
      <div className="flex justify-center gap-20 py-28">
        <div>
          <div>
            <CartSteps />
          </div>
          <div>
            <ShippingDetails />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className="text-black text-sm">Resumo do pedido</p>
          <div className="w-[350px] h-[150px]">
            <div className=" flex justify-center items-center text-center bg-dark-10">
              <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
            </div>
          </div>
          <div className="text-black">
            <div className="flex flex-col">
              <div>
                <div className="flex justify-between items-center ">
                  <p className="text-black">{shoe.sobre}</p>
                </div>
                <p className="text-black  font-semibold">{shoe.preco}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <Input placeholder="Cupom de desconto"></Input>
            </div>
            <div>
              <Button>Aplicar</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex justify-between text-sm">
              <p className="text-black ">Envio</p>
              <p className="text-green-700">Grátis</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p className="text-black text-sm">Total</p>
              <p className="text-black text-sm">{shoe.preco}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
