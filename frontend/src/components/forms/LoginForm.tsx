"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginType } from "@/lib/types";
import { login } from "@/services/auth";
import { Loader2 } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[] | null>(null);

  const onSubmit: SubmitHandler<LoginType> = async (data: LoginType) => {
    try {
      setLoading(true);
      setError(null);
      const res = await login(data);
      Cookies.set("access_token", res.data.access_token);
      router.replace("/dashboard");
    } catch (error: any) {
      if (error) {
        if (error.response) {
          setError(error.response.data.errors);
        } else {
          setError(["Something went wrong"]);
        }
      }
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <form className="w-4/12 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
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
          <span className="text-xs text-red-500 flex flex-col gap-1 mt-1">
            {error && error.map((err) => err)}
          </span>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full py-6 rounded-xl"
        disabled={!isValid || loading}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
