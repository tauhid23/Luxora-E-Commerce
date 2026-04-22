"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCart, toggleSearch, toggleSidebar } from "@/store/features/uiSlice";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { ShoppingBag, Search, Heart, Menu, User, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector((s) => s.cart);
  const wishlistCount = useAppSelector((s) => s.wishlist.items.length);
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchInputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  const iconBtn = "relative flex items-center justify-center w-10 h-10 rounded-lg text-[--muted] hover:text-[--text] hover:bg-gold/8 transition-all duration-200";
  const badge = "absolute top-1 right-1.5 min-w-[12px] h-3 flex items-center justify-center bg-[--gold] text-accent-gold text-[9px] font-extrabold rounded-full border-2 border-bg-accent-gold/20 px-px leading-none";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-200 h-16 transition-all duration-300",
          "border-b border-transparent bg-bg-primary/60 backdrop-blur-md",
          scrolled && "bg-bg-primary/95 border-accent-gold/20 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-6 flex items-center gap-0">

          {/* Hamburger — mobile only */}
          <button
            className={cn("flex lg:hidden flex-col items-center justify-center gap-[5px] mr-4", iconBtn, "w-10 h-10")}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-[1.5px] bg-current rounded transition-all" />
            <span className="block w-5 h-[1.5px] bg-current rounded transition-all" />
            <span className="block w-3.5 h-[1.5px] bg-current rounded transition-all" />
          </button>

          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-px flex-shrink-0 mr-auto lg:mr-12">
            <span className="font-heading text-[30px] font-extrabold italic tracking-tight text-text-primary transition-colors duration-150 group-hover:text-accent-gold">
              {SITE_NAME}
            </span>
            <span className="font-heading text-[28px] font-black text-accent-gold leading-none">.</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 flex-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-[11px] font-bold uppercase tracking-[0.1em]",
                    "text-text-secondary hover:text-text-primary transition-colors duration-150",
                    "after:content-[''] after:absolute after:left-0 after:-bottom-0.5",
                    "after:h-px after:w-0 after:bg-accent-gold after:transition-all after:duration-200",
                    "hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1 lg:ml-auto">
            <button className={iconBtn} onClick={() => setSearchOpen(true)} aria-label="Search">
              <Search size={19} strokeWidth={1.7} />
            </button>

            <div className="w-px h-5 bg-accent-gold/15 mx-1" />

            <Link href="/wishlist" className={iconBtn} aria-label={`Wishlist (${wishlistCount})`}>
              <Heart size={19} strokeWidth={1.7} />
              {wishlistCount > 0 && <span className={badge}>{wishlistCount}</span>}
            </Link>

            <button className={iconBtn} onClick={() => dispatch(toggleCart())} aria-label={`Cart (${totalItems})`}>
              <ShoppingBag size={19} strokeWidth={1.7} />
              {totalItems > 0 && <span className={badge}>{totalItems > 99 ? "99+" : totalItems}</span>}
            </button>

            <div className="w-px h-5 bg-accent-gold/15 mx-1" />

            <Link href={isAuthenticated ? "/account" : "/auth/login"} className={iconBtn} aria-label="Account">
              <User size={19} strokeWidth={1.7} />
            </Link>
          </div>
        </div>

        {/* Search slide-down */}
        <div
          className={cn(
            "absolute top-full inset-x-0 bg-bg-primary border-b border-accent-gold/15",
            "overflow-hidden transition-all duration-300",
            searchOpen ? "max-h-20 py-3" : "max-h-0 py-0"
          )}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center gap-3">
            <Search size={16} strokeWidth={1.7} className="text-text-secondary flex-shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products, designers, collections…"
              className="flex-1 bg-transparent border-none outline-none text-lg font-heading text-text-primary placeholder:text-text-secondary/50 caret-accent-gold"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-[11px] font-bold tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors px-2 py-1"
            >
              Close
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={cn(
          "fixed inset-0 z-[300] transition-all duration-300",
          drawerOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black transition-opacity duration-300",
            drawerOpen ? "opacity-60" : "opacity-0"
          )}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[min(320px,85vw)]",
            "bg-bg-primary border-r border-accent-gold/15",
            "flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-5 border-b border-accent-gold/10">
            <Link href="/" className="group flex items-baseline gap-px" onClick={() => setDrawerOpen(false)}>
              <span className="font-heading text-xl font-extrabold italic tracking-tight text-text-primary group-hover:text-accent-gold transition-colors">
                {SITE_NAME}
              </span>
              <span className="font-heading text-2xl font-black text-accent-gold leading-none">.</span>
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-9 h-9 flex items-center justify-center border border-accent-gold/15 rounded-lg text-text-secondary hover:border-accent-gold hover:text-text-primary transition-all"
              aria-label="Close menu"
            >
              <X size={15} strokeWidth={1.8} />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex-1 overflow-y-auto p-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={cn(
                  "group flex items-center gap-3 px-3 py-3.5 rounded-lg mb-0.5",
                  "text-[12px] font-bold tracking-[0.08em] uppercase text-text-secondary",
                  "hover:text-text-primary hover:bg-accent-gold/5 border border-transparent",
                  "hover:border-accent-gold/15 transition-all duration-200"
                )}
              >
                <span className="flex-1">{link.label}</span>
                <ArrowRight size={13} strokeWidth={1.8} className="opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="flex gap-2 p-4 border-t border-accent-gold/10">
            <Link
              href="/wishlist"
              onClick={() => setDrawerOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-accent-gold/15 rounded-lg text-text-secondary hover:border-accent-gold hover:text-text-primary text-[11px] font-bold tracking-widest uppercase transition-all"
            >
              <Heart size={14} strokeWidth={1.8} /> Wishlist
            </Link>
            <Link
              href={isAuthenticated ? "/account" : "/auth/login"}
              onClick={() => setDrawerOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-accent-gold/15 rounded-lg text-text-secondary hover:border-accent-gold hover:text-text-primary text-[11px] font-bold tracking-widest uppercase transition-all"
            >
              <User size={14} strokeWidth={1.8} /> Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}