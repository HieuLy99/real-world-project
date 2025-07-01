/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Tablet login-amico.svg";

const schema = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  password: yup.string().min(6, "Tối thiểu 6 ký tự").required("Bắt buộc"),
});
export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("errors", errors);

  const onSubmit = async (data: any) => {
    try {
      // const res = await axios.post("/api/login", data); // thay bằng API thực tế
      // localStorage.setItem("token", res.data.token);
      console.log(data, "data");
      navigate("/dashboard");
    } catch (err: any) {
      alert(`Đăng nhập thất bại ${err}`);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2  flex flex-col items-end ">
        <div
          className="bg-amber-500  w-150 h-200 flex flex-col items-center justify-center mt-10 
        bg-gradient-to-b from-orange-400 to-orange-500 
  text-white p-8 
  rounded-tl-[64px] rounded-tr-[64px]
  rounded-bl-[48px] rounded-br-[48px]
  shadow-lg w-full max-w-xl "
        >
          <div className="font-bold text-5xl">Đăng nhập dễ dàng</div>
          <div className="font-bold ">Đăng kí dễ dàng</div>
          <img src={logo} alt="logo" className="w-130" />
        </div>
      </div>
      <div className="w-1/2  text-white flex pt-10 flex-col items-center">
        <div id="title" className="flex flex-col mt-30">
          <div className="mb-10 text-amber-500 text-7xl">Social</div>
          <div className="text-5xl text-amber-500 font-bold mb-2  ">
            Welcome Back
          </div>
          <div className="text-neutral-300 mb-10">
            Please login to your account
          </div>
        </div>
        <div id="form-login flex flex-col ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-black w-120"
          >
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="w-full border-4 border-amber-500 bg-amber-50 px-3 py-2 rounded mb-5 text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="w-full border-4 border-amber-500 bg-amber-50 px-3 py-2 rounded mb-5 text-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-80 flex justify-center items-center  bg-amber-500 text-white py-2 rounded hover:bg-amber-600 mt-10"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </div>
          </form>
        </div>
        <div id="login-other"></div>
      </div>
    </div>
  );
}
