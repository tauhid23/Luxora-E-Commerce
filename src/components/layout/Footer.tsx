import Link from "next/link";
import { SITE_NAME, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  pinterest: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-accent-gold/20 mt-auto">

      {/* ── Newsletter ────────────────────────────────────────────────── */}
      <div className="border-b border-text-primary/8 py-12"
        style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 100%)" }}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            <div>
              <h3 className="font-heading text-2xl text-text-primary mb-2">
                Join the Luxora Circle
              </h3>
              <p className="text-text-secondary text-base">
                Exclusive drops, private sales, and curated picks — right in your inbox.
              </p>
            </div>
            <form className="flex gap-3 flex-wrap shrink-0" action="#" method="get">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="form-input max-w-70 flex-1"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main footer ───────────────────────────────────────────────── */}
      <div className="py-16 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">

            {/* Brand column */}
            <div className="flex flex-col gap-5">
              <Link href="/" className="group inline-flex items-baseline gap-px">
                <span className="font-heading text-3xl font-extrabold italic text-text-primary transition-colors duration-150 group-hover:text-accent-gold">
                  {SITE_NAME}
                </span>
                <span className="font-heading text-4xl font-black text-accent-gold leading-none">.</span>
              </Link>

              <p className="text-text-secondary text-sm leading-relaxed max-w-70">
                Curating premium fashion and lifestyle for the discerning few.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9.5 h-9.5 flex items-center justify-center rounded-md border border-text-primary/8 text-text-secondary transition-all duration-200 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/8 hover:-translate-y-0.5"
                  >
                    {SOCIAL_ICONS[link.icon]}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-2">
                {[
                  { Icon: MapPin, text: "42 Rue de Luxe, Paris" },
                  { Icon: Phone, text: "+1 (800) 555-LUXE" },
                  { Icon: Mail,  text: "hello@luxora.store" },
                ].map(({ Icon, text }) => (
                  <span key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Icon size={14} className="text-accent-gold shrink-0" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Link groups */}
            {(
              [
                { title: "Shop",    links: FOOTER_LINKS.shop },
                { title: "Company", links: FOOTER_LINKS.company },
                { title: "Help",    links: FOOTER_LINKS.help },
              ] as const
            ).map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-4">
                <h4 className="font-heading text-base font-bold text-accent-gold uppercase tracking-[0.05em]">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group/link inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent-gold transition-colors duration-150"
                      >
                        <span className="opacity-0 -translate-x-1.5 text-xs transition-all duration-150 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                          →
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="border-t border-text-primary/8 py-5">
        <div className="container">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. || Developed by <a href="https://tauhid.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors duration-150">Tauhid</a>
            </p>
            <div className="flex gap-5">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-accent-gold transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
