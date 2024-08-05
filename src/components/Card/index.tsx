"use client";
import { Plus } from "lucide-react";
import { Shoe } from "@/types/Shoe";
import { Button } from "../Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TennisInformation } from "../TennisInformation";

interface CardProps {
  shoe: Shoe;
}

export function Card({ shoe }: CardProps) {
  const router = useRouter();
  const [isTennisInformationModalOpen, setIsTennisInformationModalOpen] =
    useState(false);

  function openTennisInformationModal() {
    setIsTennisInformationModalOpen(true);
  }

  function closeTennisInformationModal() {
    setIsTennisInformationModalOpen(false);
  }
  return (
    <div>
      <div className="w-[350px] h-[200px]">
        <div className=" flex justify-center items-center text-center  bg-dark-10">
          <img className="w-[225] h-[135px]" src={shoe?.imagem} alt="" />
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-black">{shoe.sobre}</p>
          <Button onClick={openTennisInformationModal}>
            <Plus className="size-5" /> Comprar
          </Button>
        </div>
        <p className="text-dark-20">{shoe.nome}</p>
        <p className="text-black">{shoe.preco}</p>
      </div>
      {isTennisInformationModalOpen && (
        <TennisInformation
          closeTennisInformationModal={closeTennisInformationModal}
        />
      )}
    </div>
  );
}
