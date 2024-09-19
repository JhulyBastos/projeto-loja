import { CircleDollarSign, MoveRight, Package, UserRound } from "lucide-react";

interface CartStepsProps {
  step: number;
}

export default function CartSteps({ step }: CartStepsProps) {
  return (
    <div>
      <div className="flex justify-center gap-5 py-2 text-gray-500">
        <div
          data-active={step == 0}
          className="flex justify-center gap-2 data-[active=true]:text-green-500"
        >
          <UserRound /> Identificação
        </div>
        <MoveRight />

        <div
          data-active={step == 1}
          className="flex justify-center gap-2 data-[active=true]:text-green-500"
        >
          <CircleDollarSign /> Pagamento
        </div>
        <MoveRight />
        <div
          data-active={step == 2}
          className="flex justify-center gap-2 data-[active=true]:text-green-500"
        >
          <Package /> Envio
        </div>
      </div>
    </div>
  );
}
