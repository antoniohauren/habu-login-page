import { LabelProps } from "./types";

export default function Label({ children, text }: LabelProps) {
  return (
    <label className="flex flex-col gap-2 text-white">
      {text}
      {children}
    </label>
  );
}
