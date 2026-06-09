"use client";

import {
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email harus diisi!");
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      setError("Email tidak valid!");
      return;
    }
    
    setError("");
    setIsSubmitted(true);
    // Nanti diganti dengan API kirim email reset password
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

        <div className="flex flex-col md:flex-row">

          {/* LEFT PANEL - BIRU */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 p-8 flex flex-col justify-center min-h-[300px] md:min-h-full">
            <div className="text-white">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Mail size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">
                Lupa Password?
              </h2>
              <p className="mt-4 text-blue-100">
                Tenang, kami akan kirimkan link untuk mereset password kamu.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL - PUTIH */}
          <div className="md:w-3/5 p-8 md:p-10">
            
            {!isSubmitted ? (
              <>
                <h1 className="text-2xl font-bold text-blue-800 mb-2">
                  Reset Password
                </h1>
                <p className="text-gray-500 mb-6">
                  Masukkan email kamu, kami akan mengirimkan link reset password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="border-b border-gray-300 pb-3 flex items-center gap-3">
                    <Mail className="text-gray-400" size={20} />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  {/* Tombol Kirim */}
                  <button
                    type="submit"
                    className="
                      w-full
                      bg-gradient-to-r
                      from-blue-700
                      to-cyan-500
                      py-3
                      rounded-full
                      text-white
                      font-semibold
                      flex items-center justify-center gap-2
                      hover:scale-105
                      transition
                      shadow-lg
                    "
                  >
                    Kirim Link Reset
                    <ArrowRight size={18} />
                  </button>

                  {/* Link balik ke login */}
                  <div className="text-center pt-4">
                    <Link
                      href="/login"
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1"
                    >
                      <ArrowLeft size={14} />
                      Kembali ke Login
                    </Link>
                  </div>
                </form>
              </>
            ) : (
              // TAMPILAN SUKSES
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={64} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Cek Email Kamu!
                </h2>
                <p className="text-gray-600 mb-4">
                  Kami sudah mengirimkan link reset password ke:
                </p>
                <p className="font-semibold text-blue-600 mb-6">
                  {email}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Belum menerima email? Cek folder spam atau{' '}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:underline"
                  >
                    kirim ulang
                  </button>
                </p>
                <Link
                  href="/login"
                  className="
                    inline-block
                    bg-gradient-to-r
                    from-blue-700
                    to-cyan-500
                    px-6
                    py-2
                    rounded-full
                    text-white
                    font-semibold
                    hover:scale-105
                    transition
                    shadow-lg
                  "
                >
                  Kembali ke Login
                </Link>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}