"use client";

import { useState } from "react";
import {
    Search,
    ShoppingBag,
    Heart,
    User,
    Menu,
    X,
} from "lucide-react";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const navLinks = [
        "Home",
        "New Arrivals",
        "Collections",
        "Sale",
    ];

    return (
        <>
            <header
                className="
        sticky top-0 z-50
        bg-white/90
        backdrop-blur-xl
        border-b border-[var(--color-border-light)]
      "
            >
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                    {/* Main Header */}
                    <div className="h-16 flex items-center justify-between gap-4">
                        {/* Logo */}
                        <div className="shrink-0 cursor-pointer group">
                            <h1
                                className="
                text-xl lg:text-2xl
                font-semibold
                tracking-[0.25em]
                text-[var(--color-text-primary)]
                transition-all
                duration-500
                group-hover:tracking-[0.35em]
              "
                            >
                                ZYLORA
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="
                    relative
                    text-sm
                    font-medium
                    text-[var(--color-text-secondary)]
                    group
                  "
                                >
                                    {item}

                                    <span
                                        className="
                    absolute
                    left-0
                    -bottom-1
                    h-[1.5px]
                    w-full
                    bg-black
                    scale-x-0
                    origin-left
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                                    />
                                </a>
                            ))}
                        </nav>

                        {/* Search */}
                        <div className="hidden md:block flex-1 max-w-[260px] xl:max-w-[340px]">
                            <div className="relative group">
                                <Search
                                    size={16}
                                    className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[var(--color-text-muted)]
                "
                                />

                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="
                    w-full
                    h-10
                    pl-10
                    pr-4
                    rounded-full
                    bg-[var(--color-bg-secondary)]
                    border
                    border-transparent
                    focus:border-black
                    outline-none
                    transition-all
                    duration-300
                    text-sm
                  "
                                />
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            {/* Wishlist */}
                            <button
                                className="
                  hidden md:flex
                  w-9 h-9
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-[var(--color-bg-secondary)]
                  transition-all
                  duration-300
                "
                            >
                                <Heart size={18} />
                            </button>

                            {/* Cart */}
                            <button
                                className="
                  relative
                  w-9 h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-[var(--color-bg-secondary)]
                  transition-all
                  duration-300
                "
                            >
                                <ShoppingBag size={18} />

                                <span
                                    className="
                    absolute
                    -top-1
                    -right-1
                    w-4
                    h-4
                    rounded-full
                    bg-black
                    text-white
                    text-[9px]
                    flex
                    items-center
                    justify-center
                  "
                                >
                                    3
                                </span>
                            </button>

                            {/* Account */}
                            <button
                                className="
                  hidden lg:flex
                  items-center
                  gap-2
                  px-4
                  h-9
                  rounded-full
                  bg-black
                  text-white
                  text-sm
                  hover:bg-[var(--color-btn-primary-hover)]
                  transition-all
                  duration-300
                "
                            >
                                <User size={16} />
                                Account
                            </button>

                            {/* Mobile Menu */}
                            <button
                                onClick={() => setMobileMenu(true)}
                                className="
                  lg:hidden
                  w-9 h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-[var(--color-bg-secondary)]
                "
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="md:hidden pb-3">
                        <div className="relative">
                            <Search
                                size={16}
                                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[var(--color-text-muted)]
              "
                            />

                            <input
                                type="text"
                                placeholder="Search products..."
                                className="
                  w-full
                  h-10
                  pl-10
                  pr-4
                  rounded-full
                  bg-[var(--color-bg-secondary)]
                  border
                  border-transparent
                  focus:border-black
                  outline-none
                  text-sm
                "
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div
                onClick={() => setMobileMenu(false)}
                className={`
          fixed inset-0 bg-black/30 z-[60]
          transition-opacity duration-300
          ${mobileMenu
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
        `}
            />

            {/* Mobile Drawer */}
            <aside
                className={`
          fixed
          top-0
          right-0
          h-screen
          w-[300px]
          bg-white
          z-[70]
          border-l
          border-[var(--color-border-light)]
          transition-transform
          duration-300
          ${mobileMenu
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
        `}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-semibold text-lg">
                            Menu
                        </h2>

                        <button
                            onClick={() => setMobileMenu(false)}
                            className="w-8 h-8 flex items-center justify-center"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="
                  text-[15px]
                  text-[var(--color-text-secondary)]
                  hover:text-black
                  transition-all
                  duration-300
                  hover:translate-x-2
                "
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="my-8 border-t border-[var(--color-border-light)]" />

                    {/* Actions */}
                    <div className="space-y-3">
                        <button
                            className="
                w-full
                h-11
                rounded-full
                border
                border-[var(--color-border-light)]
                flex
                items-center
                justify-center
                gap-2
              "
                        >
                            <Heart size={16} />
                            Wishlist
                        </button>

                        <button
                            className="
                w-full
                h-11
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
                gap-2
              "
                        >
                            <User size={16} />
                            Account
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}