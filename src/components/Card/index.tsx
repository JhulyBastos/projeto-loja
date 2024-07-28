import { Shoe } from "@/types/Shoe";
import { Button } from "../Button";

interface CardProps {
  shoe: Shoe;
}

export function Card({ shoe }: CardProps) {
  return (
    <div>
      <div className="w-[350px] h-[200px]">
        <div className=" flex justify-center items-center text-center  bg-dark-10">
          <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-black">{shoe.sobre}</p>
          <Button> Saber mais</Button>
        </div>
        <p className="text-dark-20">{shoe.nome}</p>
        <p className="text-black">{shoe.preco}</p>
      </div>
    </div>
  );
}
