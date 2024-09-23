import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Input } from "../Input";
import { ChevronDown } from "lucide-react";

export default function ShippingDetails() {
  const router = useRouter();
  return (
    <div className=" w-full h-screen flex flex-col gap-10 px-4">
      <div>
        <div>
          <h1 className="text-black text-xl py-7">Detalhes do envio</h1>
          <div className="flex flex-col  gap-1">
            <div className="flex gap-4">
              <div>
                <p className="text-black text-sm">Estado</p>
                <div className="flex items-center">
                  <Input variant="tertiary" placeholder="Estado" className="" />
                  <div className="w-[40px] h-[40px] bg-dark-30 flex items-center justify-center rounded-r-lg border-y border-r border-black/5">
                    <ChevronDown color="grey" className="w-5 " />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-black text-sm">Cidade</p>

                <div className="flex items-center justify-between">
                  <Input variant="tertiary" placeholder="Cidade" className="" />
                  <div className="w-[40px] h-[40px] bg-dark-30 flex items-center justify-center rounded-r-lg border-y border-r  border-black/5">
                    {" "}
                    <ChevronDown color="grey" className="w-5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
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
        <Button
          onClick={() => router.push("/Confirmed")}
          classname="w-[170px] px-2 font-normal"
        >
          Finalizar pedido
        </Button>
      </div>
    </div>
  );
}
