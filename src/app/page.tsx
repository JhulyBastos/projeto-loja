import { Card } from "@/components/Card";
import { shoes } from "@/data/shoes";
import { Shoe } from "@/types/Shoe";

export default function Home() {
  return (
    <div className=" bg-white">
      <div>
        <div className="flex items-center justify-center px-8">
          <p className="text-zinc-950 text-center py-3">
            Frete grátis para todo o Brasil
          </p>
        </div>

        <div className="">
          <div className="w-full h-[400px] bg-background bg-cover bg-center flex flex-col justify-center items-center">
            <div className="w-3/4 ">
              <div className="flex  gap-2">
                <img
                  className="w-[38px] h-[38px]"
                  src="/icon/logo-jordan.svg"
                  alt="logo da Jordan"
                />
                <p className="text-lg">JordanShoes</p>
              </div>
              <div>
                <p className="text-2xl  mt-[20px]">A melhor loja de Jordan</p>
                <p className="text-lg mt-[10px]">
                  O tênis Jordan é fruto de uma velha e forte <br />
                  parceria entre a Nike e o jogador Michael Jordan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-[80px]">
          <h1 className=" text-zinc-950 font-semibold text-2xl">
            Os melhores em só lugar
          </h1>
          <p className=" text-zinc-950 mt-4 text-center px-6">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 px-8">
          {shoes.map((shoe: Shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
        <div className="py-20" />
      </div>
    </div>
  );
}
