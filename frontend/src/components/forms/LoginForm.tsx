import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function LoginForm() {
  return (
    <form className="w-4/12 space-y-5">
      <div className="space-y-3">
        <Input placeholder="Email" name="email" type="email" className="py-6" />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          className="py-6"
        />
      </div>
      <Button className="w-full py-6 rounded-xl">Log in</Button>
    </form>
  );
}

export default LoginForm;
