import { Shoe } from "@/types/Shoe";
import { Button } from "../Button";

interface CardProps {
  shoe: Shoe;
}

export function Card({ shoe }: CardProps) {
  return (
    <div className="w-[350px] h-[200px]">
      <div className=" flex justify-center items-center text-center  bg-black">
        <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
      </div>
      <p>{shoe.sobre}</p>
      <p>{shoe.nome}</p>
      <div>
        <Button> comprar</Button>
      </div>
    </div>
  );
}
