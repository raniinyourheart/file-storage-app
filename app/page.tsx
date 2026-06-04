"use client";

import {
  UserRound,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 flex items-center justify-center p-6">

      {/* Card */}
      <div className="w-full max-w-5xl h-[650px] bg-white rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] flex">

        {/* LEFT PANEL */}
        <div className="hidden md:flex w-2/5 relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400" />

          {/* Decorative Shapes */}
          <div className="absolute -left-24 top-0 w-96 h-96 bg-white/10 rotate-45 backdrop-blur-sm" />

          <div className="absolute -left-40 top-24 w-96 h-96 bg-white/10 rotate-45" />

          <div className="absolute bottom-0 left-0 w-full h-64 bg-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-10 text-white">

            <div className="bg-white text-blue-700 font-bold w-fit px-8 py-4 rounded-r-full rounded-l-2xl shadow-xl">
              LOGIN
            </div>

            <button className="mt-6 font-semibold tracking-wide hover:translate-x-2 transition">
              SIGN IN
            </button>

            <div className="mt-10">
              <h2 className="text-4xl font-bold">
                Welcome Back
              </h2>

              <p className="mt-4 text-blue-100">
                Login untuk mengakses dashboard dan
                mengelola seluruh data dengan mudah.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex items-center justify-center bg-white relative">

          {/* Glow */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-30" />

          <div className="w-full max-w-md px-8 relative z-10">

            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-2xl">
                <UserRound
                  size={42}
                  className="text-white"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-center text-4xl font-bold text-blue-800 mt-6">
              LOGIN
            </h1>

            {/* Form */}
            <form className="mt-10 space-y-6">

              {/* Email */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">

                <Mail
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none"
                />
              </div>

              {/* Password */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">

                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none"
                />
              </div>

              {/* Forgot */}
              <div className="flex justify-between items-center">

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </button>

                <button
                  type="submit"
                  className="
                  bg-gradient-to-r
                  from-blue-700
                  to-cyan-500
                  px-8 py-3
                  rounded-full
                  text-white
                  font-semibold
                  flex items-center gap-2
                  hover:scale-105
                  transition
                  shadow-lg
                  "
                >
                  LOGIN
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-12 border-t pt-8">

              <p className="text-center text-gray-500">
                Or Login With
              </p>

              <div className="flex justify-center gap-6 mt-5">

                <button className="bg-gray-100 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
                  Google
                </button>

                <button className="bg-gray-100 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
                  Facebook
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}