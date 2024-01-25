import { Form } from "./components/form";

function App() {
  return (
    <div className="bg-gray-600 h-screen p-12 flex flex-col gap-2">
      <Form.Control label={labels.email} />

      <Form.Control label={labels.password} />

      <Form.Link label={labels.forgot} />

      <Form.Button label={labels.button} />

      <Form.SocialLoginSection></Form.SocialLoginSection>

      <Form.Link label={labels.signup} />
    </div>
  );
}

const labels = {
  email: "Email",
  password: "Password",
  forgot: "Forgot Password",
  button: "Sign In",
  signup: "Create an account",
};

export default App;
