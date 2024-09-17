import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  variant?: "primary" | "secondary" | "tertiary";
}

export function Input({ variant = "primary", ...props }: InputProps) {
  const variants = {
    primary: "rounded border",
    secondary: "w-[180px] rounded border",
    tertiary: "w-[210px] rounded-l-lg border-y border-l",
  };
  return (
    <input
      {...props}
      className={`${variants[variant]} bg-dark-30 w-[250px]  h-10 p-4  border-black/5 text-black focus:outline-none placeholder:text-sm`}
    />
  );
}
