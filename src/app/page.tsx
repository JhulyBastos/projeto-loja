export default function Home() {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-50">
        <p className="text-zinc-950 text-center py-3">
          Frete grátis para todo o Brasil
        </p>
        <div className="w-full h-[400px] bg-background bg-cover">
          <div className="px-[350px] py-[100px]">
            <div className="flex items-center gap-2">
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
        <div className="text-center py-[80px]">
          <h1 className=" text-zinc-950 font-semibold text-2xl">
            Os melhores em só lugar
          </h1>
          <p className="  text-zinc-950 mt-4">
            A marca Jordan na JordanShoes é a escolha certa para <br />
            os amantes de sneakers que buscam estilo e conforto.
          </p>
        </div>
      </div>
    </div>
  );
}
