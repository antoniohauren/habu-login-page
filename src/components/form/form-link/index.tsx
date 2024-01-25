import { LinkProps } from "./types";

export default function Link({ label, href }: LinkProps) {
  return (
    <a href={href} className="ml-auto underline text-white cursor-pointer">
      {label}
    </a>
  );
}
