import { SocialLoginProps } from "./types";

export default function SocialLogin({ icon, href }: SocialLoginProps) {
  return (
    <a className="w-12 h-12 p-2.5 bg-white rounded-full" href={href}>
      {icon}
    </a>
  );
}
