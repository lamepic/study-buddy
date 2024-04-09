import AuthLayout from "@/components/Layout/AuthLayout";
import SignupForm from "@/components/forms/SignupForm";

function Signup() {
  return (
    <AuthLayout
      currentPageName="Sign up"
      nextPageName="Log in"
      nextPageLink="/auth/login"
    >
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
