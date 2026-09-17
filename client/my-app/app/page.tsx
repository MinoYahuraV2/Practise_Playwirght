"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous messages
    setEmailError("");
    setPasswordError("");
    setLoginError("");
    setSuccessMessage("");

    let hasError = false;

    // =========================
    // Email Validation
    // =========================

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!email.includes("@")) {
      setEmailError("Invalid email");
      hasError = true;
    }

    // =========================
    // Password Validation
    // =========================

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    // Stop if validation failed
    if (hasError) {
      return;
    }

    // =========================
    // Mock Login
    // =========================

    setLoading(true);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === "test@test.com" && password === "123456") {
      setSuccessMessage("Login successful");

      if (rememberMe) {
        console.log("Remember me enabled");
      }
    } else {
      setLoginError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* ========================================
            Header
        ======================================== */}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            EventPot
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Welcome back! Please sign in to your account.
          </p>
        </div>

        {/* ========================================
            Login Card
        ======================================== */}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          {/* Title */}

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Sign in
          </h2>

          {/* ========================================
              Login Form
          ======================================== */}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* ======================================
                Email
            ====================================== */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
              />

              {/* Email Error */}

              {emailError && (
                <p
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {emailError}
                </p>
              )}
            </div>

            {/* ======================================
                Password
            ====================================== */}

            <div>

              {/* Password Label */}

              <div className="flex items-center justify-between mb-2">

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-gray-600 hover:text-black"
                >
                  Forgot password?
                </button>

              </div>

              {/* Password Input */}

              <div className="relative">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                />

                {/* Show / Hide Password */}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-black"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              {/* Password Error */}

              {passwordError && (
                <p
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {passwordError}
                </p>
              )}

            </div>

            {/* ======================================
                Login Error
            ====================================== */}

            {loginError && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {loginError}
              </div>
            )}

            {/* ======================================
                Login Success
            ====================================== */}

            {successMessage && (
              <div
                role="status"
                className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600"
              >
                {successMessage}
              </div>
            )}

            {/* ======================================
                Remember Me
            ====================================== */}

            <div className="flex items-center gap-2">

              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>

            </div>

            {/* ======================================
                Login Button
            ====================================== */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

          </form>

          {/* ========================================
              Register
          ======================================== */}

          <div className="mt-6 text-center text-sm text-gray-500">

            Don't have an account?{" "}

            <button
              type="button"
              className="font-semibold text-black hover:underline"
            >
              Create account
            </button>

          </div>

        </div>

        {/* ========================================
            Test Account
        ======================================== */}

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600">

          <p className="font-semibold text-gray-800">
            Test Account
          </p>

          <div className="mt-2 space-y-1">
            <p>
              Email:{" "}
              <span className="font-mono text-gray-800">
                test@test.com
              </span>
            </p>

            <p>
              Password:{" "}
              <span className="font-mono text-gray-800">
                123456
              </span>
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}