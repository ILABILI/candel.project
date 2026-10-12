import { Form, Link } from "react-router-dom";
import {Instagram,Facebook,Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5f2] text-[#282321] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] mb-8">
            INFORMATION
          </h3>
          <Link
            to="/faq"
            className="text-sm text-gray-600 hover:text-black"
          >
            Frequently Asked Questions
          </Link>
        </div>

        
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] mb-8">
            ABOUT
          </h3>
          <Link
            to="/about"
            className="text-sm text-gray-600 hover:text-black"
          >
            About Us
          </Link>
        </div>

        
        <div>
          <h3 className="text-xs font-bold tracking-[0.15em] mb-8">
            WHOLESALE & EVENTS
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Contact us at:
          </p>
          <a
            href="mailto:wholesale@yourbrand.com"
            className="block text-sm mb-2 hover:underline"
          >
            baillyilham943@gmail.com
          </a>
          <a
            href="mailto:events@yourbrand.com"
            className="block text-sm hover:underline"
          >
            HILINBILIN@gmail.com
          </a>
        </div>

       {/* Social Media */}
<div>
  <h3 className="text-xs font-bold tracking-[0.15em] mb-8">
    FOLLOW US ON
  </h3>

  <div className="flex items-center gap-4">
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
      className="hover:opacity-60 transition"
    >
      <Instagram size={20} strokeWidth={2} />
    </a>

    <a
      href="https://facebook.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
      className="hover:opacity-60 transition"
    >
      <Facebook size={20} strokeWidth={2} />
    </a>

    <a
      href="https://linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="hover:opacity-60 transition"
    >
      <Linkedin size={20} strokeWidth={2} />
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}