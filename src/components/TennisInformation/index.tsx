"use client";
import {
  UserRound,
  Package,
  CircleDollarSign,
  ShoppingCart,
  MoveRight,
} from "lucide-react";
import { Input } from "../Input";

export function TennisInformation() {
  return (
    <div className="w-full h-screen overflow-auto fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="w-10/12 h-4/5  bg-white">
        <div>
          <div className="flex justify-center gap-5  text-black/90">
            <div className="flex justify-center gap-2">
              <ShoppingCart /> Carrinho
            </div>
            <MoveRight />
            <div className="flex justify-center gap-2">
              <UserRound /> Identificação
            </div>
            <MoveRight />
            <div className="flex justify-center gap-2">
              <Package /> Envio
            </div>
            <MoveRight />
            <div className="flex justify-center gap-2">
              <CircleDollarSign /> Pagamento
            </div>
          </div>
        </div>
        <div className="text-black">imagem do produto</div>
      </div>
    </div>
  );
}
