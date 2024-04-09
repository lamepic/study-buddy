import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm";

function Login() {
  return (
    <AuthLayout
      currentPageName="Log in"
      nextPageName="Sign up"
      nextPageLink="/auth/signup"
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
