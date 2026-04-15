import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { 
  title: "Sign In | Luxora" 
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden p-6">
      {/* Background Decorative Elements */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent-burgundy/5 blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Glass Card */}
        <div className="glass-card p-10 md:p-12 rounded-3xl">
          {/* Logo & Heading */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-1 mb-6">
              <span 
                className="font-heading text-4xl font-bold tracking-tighter text-text-primary hover:text-accent-gold transition-colors duration-150"
              >
                Luxora
              </span>
              <span className="font-heading text-4xl font-black text-accent-gold leading-none ">.</span>
            </Link>

            <h1 className="text-3xl font-heading font-semibold text-text-primary">
              Welcome Back
            </h1>
            <p className="text-text-muted mt-2 text-[15px]">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Link 
                  href="/auth/forgot-password"
                  className="text-xs text-accent-gold hover:text-accent-gold-light transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-full mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-8" />

          {/* Sign Up Link */}
          <p className="text-center text-text-muted text-sm">
            Don&apos;t have an account?{" "}
            <Link 
              href="/auth/register" 
              className="text-accent-gold hover:text-accent-warm-gold font-semibold transition-colors"
            >
              Create one now
            </Link>
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-center text-text-muted text-xs mt-8">
          Secure login powered by 256-bit SSL encryption
        </p>
      </div>
    </div>
  );
}