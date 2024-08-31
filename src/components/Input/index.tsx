import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-dark-30 w-full h-10 p-4 rounded border border-black/5 text-black focus:outline-none placeholder:text-sm"
    />
  );
}
