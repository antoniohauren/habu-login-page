import SocialLoginFacebook from "../form-social-login-facebook";
import SocialLoginGithub from "../form-social-login-github";
import SocialLoginGoogle from "../form-social-login-google";

export default function SocialLoginSection() {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <SocialLoginGoogle />

      <SocialLoginGithub />

      <SocialLoginFacebook />
    </div>
  );
}
