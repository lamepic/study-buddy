"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignupType } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "@/services/auth";

function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignupType>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SignupType> = async (data) => {
    try {
      setLoading(true);
      const res = await signup(data);
      if (res.status === 201) {
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <form
      className="w-10/12 md:w-4/12 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-3">
        <div>
          <Input
            placeholder="Name"
            type="text"
            className="py-6"
            {...register("name", { required: "Name is required" })}
          />
          <span className="text-xs text-red-500">
            {errors.name && errors.name.message}
          </span>
        </div>
        <div>
          <Input
            placeholder="Email"
            type="email"
            className="py-6"
            {...register("email", { required: "Email is required" })}
          />
          <span className="text-xs text-red-500">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            className="py-6"
            {...register("password", { required: "Password is required" })}
          />
          <span className="text-xs text-red-500">
            {errors.password && errors.password.message}
          </span>
        </div>
        <div>
          <Input
            placeholder="Confirm Password"
            type="password"
            className="py-6"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
          />
          <span className="text-xs text-red-500">
            {errors.confirmPassword && errors.confirmPassword.message}
          </span>
        </div>
      </div>
      <Button className="w-full py-6 rounded-xl" disabled={!isValid || loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>
    </form>
  );
}

export default SignupForm;
