"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone_number: phoneNumber,
          }
        }
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-stone-100/50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-3xl font-serif text-[#7A2A20]">
          SpiceHub
        </div>
        <Link href="#" className="text-stone-700 hover:text-stone-900 text-sm">
          Support
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-lg shadow-xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-[#7A2A20] mb-2">Create your account</h1>
            <p className="text-stone-600 text-sm">
              Join our community of epicureans and<br />enjoy a seamless gourmet experience.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-stone-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jean-Luc Picard"
                  className="w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7A2A20] focus:border-[#7A2A20]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-stone-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gourmet@spicehub.com"
                  className="w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7A2A20] focus:border-[#7A2A20]"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-stone-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7A2A20] focus:border-[#7A2A20]"
                />
              </div>
            </div>

            {/* Passwords */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1">
                <label className="block text-sm text-stone-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7A2A20] focus:border-[#7A2A20]"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-stone-700 mb-1">Confirm</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md bg-stone-50 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7A2A20] focus:border-[#7A2A20]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#9B3A2C] hover:bg-[#7A2A20] text-white py-3 rounded-full font-medium tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "CREATING..." : "CREATE ACCOUNT"}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-stone-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#7A2A20] hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-stone-100/80 flex flex-col items-center justify-center space-y-4">
        <div className="font-serif text-[#7A2A20] text-lg">SpiceHub</div>
        <div className="text-stone-600 text-sm">
          © 2024 SpiceHub. The Modern Epicurean.
        </div>
        <div className="flex space-x-6 text-sm text-stone-600">
          <Link href="#" className="hover:text-stone-900">Privacy Policy</Link>
          <Link href="#" className="hover:text-stone-900">Terms of Service</Link>
          <Link href="#" className="hover:text-stone-900">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
