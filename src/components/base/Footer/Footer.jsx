import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="py-20">

          {/* Logo */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.35em]">
              ZYLORA
            </h2>

            <p className="mt-5 text-sm text-neutral-400 tracking-widest uppercase">
              Premium Fashion & Lifestyle
            </p>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10" />

          {/* Contact */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">

            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <Phone size={16} />
              <span>+92 300 9335988</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <Mail size={16} />
              <span>support@zylora.com</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <MapPin size={16} />
              <span>Lahore, Pakistan</span>
            </div>

          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/10" />

          {/* Social */}
          <div className="flex justify-center gap-8">

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition duration-300 hover:-translate-y-1"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition duration-300 hover:-translate-y-1"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn size={20} />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-14 text-center">
            <p className="text-xs tracking-wider text-neutral-500">
              © {new Date().getFullYear()} ZYLORA. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;