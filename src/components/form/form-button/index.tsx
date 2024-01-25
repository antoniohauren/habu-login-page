import { ButtonProps } from "./types";

export default function Button({ label }: ButtonProps) {
  return (
    <button className="w-full bg-green-600 text-white font-bold p-2 rounded-lg hover:bg-green-700">
      {label}
    </button>
  );
}
