import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-[95px] h-[25px] flex items-center justify-center gap-1 rounded text-sm font-medium text-dark-10 bg-green-700 hover:bg-green-900 duration-300"
      {...props}
    >
      {children}
    </button>
  );
}
