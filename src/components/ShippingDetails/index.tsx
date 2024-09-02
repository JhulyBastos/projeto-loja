import { Input } from "../Input";

export default function ShippingDetails() {
  return (
    <div>
      <div>
        <h1 className="text-black text-xl py-7">Detalhes do envio</h1>
        <p className="text-black text-sm">Usar o endereço salvo</p>
        <Input />
      </div>
    </div>
  );
}
