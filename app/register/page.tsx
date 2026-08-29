"use client";

import {
  UserRound,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Password tidak cocok!");
      return;
    }
    setPasswordError("");
    alert("Pendaftaran berhasil! (demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl h-[650px] bg-white rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] flex">

        {/* LEFT PANEL - BIRU */}
        <div className="hidden md:flex w-2/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400" />
          <div className="absolute -left-24 top-0 w-96 h-96 bg-white/10 rotate-45 backdrop-blur-sm" />
          <div className="absolute -left-40 top-24 w-96 h-96 bg-white/10 rotate-45" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-white/10" />

          <div className="relative z-10 flex flex-col justify-center px-10 text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
              <UserRound size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold">Join Us</h2>
            <p className="mt-4 text-blue-100">
              Daftar sekarang dan kelola file storage dengan mudah.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL - PUTIH */}
        <div className="flex-1 flex items-center justify-center bg-white relative">
          <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-300 rounded-full blur-3xl opacity-30" />

          <div className="w-full max-w-md px-8 relative z-10">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-xl">
                <UserRound size={34} className="text-white" />
              </div>
            </div>

            <h1 className="text-center text-3xl font-bold text-blue-800 mt-4">
              REGISTER
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Full Name */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <UserRound className="text-gray-400" size={20} />
                <input type="text" placeholder="Full Name" className="w-full outline-none" required />
              </div>

              {/* Email */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <input type="email" placeholder="Email" className="w-full outline-none" required />
              </div>

              {/* Password */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <Lock className="text-gray-400" size={20} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full outline-none" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              {/* Confirm Password */}
              <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                <Lock className="text-gray-400" size={20} />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="w-full outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
              </div>

              {/* Error Password */}
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}

              {/* Tombol REGISTER */}
              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-700 to-cyan-500 px-10 py-2.5 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
                >
                  REGISTER
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm text-blue-600 hover:text-blue-800">
                Sudah punya akun? Login →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}