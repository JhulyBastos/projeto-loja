"use client";
import { Plus, ShoppingCart } from "lucide-react";
import { Shoe } from "@/types/Shoe";
import { ButtonCard } from "../Button";
import { useRouter } from "next/navigation";

interface CardProps {
  shoe: Shoe;
}

export function Card({ shoe }: CardProps) {
  const router = useRouter();

  return (
    <div>
      <div className="w-[350px] h-[200px]">
        <div className=" flex justify-center items-center text-center  bg-dark-10">
          <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-black">{shoe.sobre}</p>
          <ButtonCard onClick={() => router.push(`/${shoe.id}`)}>
            <ShoppingCart className="size-5" /> Comprar
          </ButtonCard>
        </div>
        <p className="text-dark-20">{shoe.nome}</p>
        <p className="text-black">{shoe.preco}</p>
      </div>
    </div>
  );
}
