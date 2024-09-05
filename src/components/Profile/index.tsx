import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Input } from "../Input";

export default function Profile() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-black text-xl py-7">Detalhes da conta</h1>
        <div className="flex flex-col  gap-6">
          <div>
            <p className="text-black text-sm">Email</p>
            <Input placeholder="Email" />
          </div>
          <div>
            <p className="text-black text-sm">Senha</p>
            <Input type="password" placeholder="Senha" />
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
