import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className=" w-[150px] h-[40px] rounded font-medium text-dark-20 bg-dark-30 py-[2px] px-7 hover:scale-105 duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
