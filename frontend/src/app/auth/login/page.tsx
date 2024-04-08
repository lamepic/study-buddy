import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm";

function Login() {
  return (
    <AuthLayout
      currentPageName="Log in"
      pageName="Sign up"
      pageLink="/auth/signup"
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
