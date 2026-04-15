import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = { 
  title: "Create Account | Luxora" 
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden p-6">
      {/* Background Decorative Glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[340px] h-[340px] rounded-full bg-accent-burgundy/5 blur-3xl" />
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
              <span className="font-heading text-4xl font-bold tracking-tighter text-text-primary hover:text-accent-gold transition-colors duration-150">
                Luxora
              </span>
              <span className="font-heading text-4xl font-black text-accent-gold leading-none">.</span>
            </Link>

            <h1 className="text-3xl font-heading font-semibold text-text-primary">
              Create Account
            </h1>
            <p className="text-text-muted mt-2 text-[15px]">
              Join the Luxora circle of connoisseurs
            </p>
          </div>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="form-input"
                  placeholder="Jane"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-input"
                  placeholder="Doe"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="form-input"
                placeholder="Repeat your password"
                autoComplete="new-password"
                required
              />
            </div>

            {/* Terms & Privacy */}
            <p className="text-xs text-text-muted leading-relaxed">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="text-accent-gold hover:text-accent-warm-gold transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent-gold hover:text-accent-warm-gold transition-colors">
                Privacy Policy
              </Link>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg w-full mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-8" />

          {/* Sign In Link */}
          <p className="text-center text-text-muted text-sm">
            Already have an account?{" "}
            <Link 
              href="/auth/login" 
              className="text-accent-gold hover:text-accent-warm-gold font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Security Note */}
        <p className="text-center text-text-muted text-xs mt-8">
          Secure registration • 256-bit SSL encryption
        </p>
      </div>
    </div>
  );
}