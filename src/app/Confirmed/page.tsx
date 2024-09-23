import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function ConfirmedPurchase() {
  const router = useRouter();
  return (
    <div className="w-full h-full bg-white">
      <div>
        <Button
          onClick={() => router.push("/")}
          classname="w-[170px] px-2 font-normal"
        >
          Voltar as compras
        </Button>
      </div>
    </div>
  );
}
