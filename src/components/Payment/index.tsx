import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Input } from "../Input";

export default function Payment() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-black text-xl py-7">Detalhes do pagamento</h1>
        <div className="flex flex-col  gap-6">
          <div>
            <p className="text-black text-sm">Usar cartão salvo</p>
            <Input placeholder="Usar cartão salvo" />
          </div>
          <div>
            <p className="text-black text-sm">Nome no cartão</p>
            <Input placeholder="Nome no cartão" />
          </div>
          <div>
            <p className="text-black text-sm">Número do cartão</p>
            <Input placeholder="Número do cartão" />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-black text-sm">Expiração</p>
              <Input variant="secondary" placeholder="Expiração" className="" />
            </div>
            <div>
              <p className="text-black text-sm">CVC</p>
              <Input placeholder="CVC" className="" />
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
        <Button classname="w-[170px] px-2 font-normal">
          Continuar comprando
        </Button>
      </div>
    </div>
  );
}
