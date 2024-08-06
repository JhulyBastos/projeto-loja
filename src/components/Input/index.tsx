import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-dark-30 w-80 h-10 p-4 rounded-lg border border-black/5"
    />
  );
}
