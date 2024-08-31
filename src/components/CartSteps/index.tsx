import { CircleDollarSign, MoveRight, Package, UserRound } from "lucide-react";

export default function CartSteps() {
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center gap-5 py-2 text-gray-500">
            <div className="flex justify-center gap-2">
              <UserRound /> Identificação
            </div>
            <MoveRight />

            <div className="flex justify-center gap-2">
              <CircleDollarSign /> Pagamento
            </div>
            <MoveRight />
            <div className="flex justify-center gap-2">
              <Package /> Envio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
