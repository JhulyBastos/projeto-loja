import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  variant?: "primary" | "secondary";
}

export function Input({ variant = "primary", ...props }: InputProps) {
  const variants = {
    primary: "",
    secondary: "w-[180px]",
  };
  return (
    <input
      {...props}
      className={`${variants[variant]} bg-dark-30 w-full  h-10 p-4 rounded border border-black/5 text-black focus:outline-none placeholder:text-sm`}
    />
  );
}
