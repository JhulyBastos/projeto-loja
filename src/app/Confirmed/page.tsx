"use client";
import { Button } from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shoes } from "@/data/shoes";
import { Shoe } from "@/types/Shoe";

export default function Confirmed() {
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

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full h-full flex flex-col justify-between items-center py-40">
          <div className="text-black">
            <h1 className="text-black text-4xl text-center">
              Compra finalizada com sucesso
            </h1>
            <div className="text-center py-16 flex flex-col gap-4 text-lg">
              <p>Detalhes da compra</p>
              <div className=" flex justify-center items-center text-center bg-dark-10">
                <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
              </div>
              <p>imagem da compra</p>
              <p>nome do produto</p>
              <p>Detalhes do endereço de entrega</p>
            </div>
          </div>
          <div>
            <Button
              onClick={() => router.push("/")}
              classname="w-[170px] px-2 font-normal"
            >
              Voltar as compras
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
