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

        {/* LEFT PANEL - BIRU (tanpa kotak LOGIN) */}
        <div className="hidden md:flex w-2/5 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400" />

          <div className="absolute -left-24 top-0 w-96 h-96 bg-white/10 rotate-45 backdrop-blur-sm" />
          <div className="absolute -left-40 top-24 w-96 h-96 bg-white/10 rotate-45" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-white/10" />

          {/* LANGSUNG WELCOME BACK, TANPA KOTAK LOGIN */}
          <div className="relative z-10 flex flex-col justify-center px-10 text-white">

            <h2 className="text-4xl font-bold">
              Welcome Back
            </h2>

            <p className="mt-4 text-blue-100">
              Login untuk mengakses dashboard dan
              mengelola seluruh data dengan mudah.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL - PUTIH */}
        <div className="flex-1 flex items-center justify-center bg-white relative">

          <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-30" />

          <div className="w-full max-w-md px-8 relative z-10">

            {/* Icon avatar */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-xl">
                <UserRound size={34} className="text-white" />
              </div>
            </div>

            {/* Tulisan LOGIN */}
            <h1 className="text-center text-3xl font-bold text-blue-800 mt-4">
              LOGIN
            </h1>

            {/* Form */}
            <form className="mt-8 space-y-6">

              {/* Email */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none"
                />
              </div>

              {/* Password */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <Lock className="text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none"
                />
              </div>

              {/* Forgot Password + Register */}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </button>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Belum punya akun? Register →
                </button>
              </div>

              {/* Tombol LOGIN - DIPERKECIL, GAUSA FULL WIDTH */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="
                  bg-gradient-to-r
                  from-blue-700
                  to-cyan-500
                  px-10
                  py-2.5
                  rounded-full
                  text-white
                  font-semibold
                  flex items-center justify-center gap-2
                  hover:scale-105
                  transition
                  shadow-lg
                  "
                >
                  LOGIN
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            {/* Divider + Google Only (tanpa icon bola biru) */}
            <div className="mt-10 border-t pt-6">

              <p className="text-center text-gray-500">
                Or Login With
              </p>

              <div className="flex justify-center mt-5">
                <button className="bg-gray-100 px-8 py-2.5 rounded-xl hover:bg-gray-200 transition">
                  Google
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}