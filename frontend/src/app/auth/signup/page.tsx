import AuthLayout from "@/components/Layout/AuthLayout";
import SignupForm from "@/components/forms/SignupForm";

function Signup() {
  return (
    <AuthLayout
      currentPageName="Sign in"
      pageName="Log in"
      pageLink="/auth/login"
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
