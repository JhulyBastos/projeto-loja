import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Input } from "../Input";
import { ChevronDown } from "lucide-react";

export default function ShippingDetails() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div>
          <h1 className="text-black text-xl py-7">Detalhes do envio</h1>
          <div className="flex flex-col  gap-1">
            <div className="flex justify-between gap-5">
              <div>
                <p className="text-black text-sm">Estado</p>
                <div className="flex items-center">
                  <Input
                    variant="secondary"
                    placeholder="Estado"
                    className=""
                  />
                  <ChevronDown color="black" className="w-5 bg-slate-400" />
                </div>
              </div>
              <div>
                <p className="text-black text-sm">Cidade</p>
                <div className="flex items-center">
                  <Input placeholder="Cidade" className="" />
                  <ChevronDown color="black" className="w-5 bg-slate-400" />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-black text-sm">Rua</p>
                <Input placeholder="Rua" className="" />
              </div>
              <div>
                <p className="text-black text-sm">Número</p>
                <Input variant="secondary" placeholder="Número" className="" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-black text-sm">Bairro</p>
                <Input placeholder="Bairro" className="" />
              </div>
              <div>
                <p className="text-black text-sm">Cep</p>
                <Input variant="secondary" placeholder="Cep" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  border bg-black" />
      <div className="flex gap-5 justify-end">
        <Button
          onClick={() => router.push("/")}
          classname="w-[170px] px-2 font-normal border-0 text-red-700 hover:border-1 hover:rounded hover:bg-red-600"
        >
          Cancelar pedido
        </Button>
        <Button classname="w-[170px] px-2 font-normal">Finalizar pedido</Button>
      </div>
    </div>
  );
}
