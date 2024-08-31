import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  classname?: string;
}

export function Button({ children, classname = "", ...props }: ButtonProps) {
  return (
    <button
      className={`w-full h-10 flex items-center justify-center rounded border px-5 border-green-700 text-sm font-medium text-green-700 hover:bg-green-900  hover:text-white duration-100
        ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonCard({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-[95px] h-[25px] flex items-center justify-center gap-1 rounded text-sm font-medium text-dark-10 bg-green-700 hover:bg-green-900 duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
