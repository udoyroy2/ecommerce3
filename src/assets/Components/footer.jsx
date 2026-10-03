import { Link } from "react-router-dom";


import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-100 text-black">

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="text-2xl font-black text-black"
            >
              Urban<span className="text-green-400">Cart</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-black/60">
              A modern online shopping experience built for
              everyday fashion, comfort and lifestyle.
            </p>

            <div className="mt-6 flex gap-2">

              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 hover:bg-white/10"
              >
                <FaTwitter size={18} />
              </a>

            </div>

          </div>

          

          <div>

            <h3 className="font-bold text-green-500">
              Pages
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link to="/" className="hover:text-green-500">
                Home
              </Link>

              <Link to="/about" className="hover:text-green-500">
                About Us
              </Link>

              <Link to="/contact" className="hover:text-green-500">
                Contact Us
              </Link>

              <Link to="/category/all" className="hover:text-green-500">
                All Products
              </Link>

            </div>

          </div>

        

          <div>

            <h3 className="font-bold text-green-500">
              Help
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link to="/return-policy" className="hover:text-green-500">
                Privacy Policy
              </Link>

              <Link to="/return-policy" className="hover:text-green-500">
                Refund & Exchange
              </Link>

              <Link to="/return-policy" className="hover:text-green-500">
                Terms & Conditions
              </Link>

              <Link to="/return-policy" className="hover:text-green-500">
                Customer Support
              </Link>

            </div>

          </div>

    

          <div>

            <h3 className="font-bold text-green-500">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="shrink-0 text-indigo-400"
                />

                <span>
                  Dhaka, Bangladesh
                </span>

              </div>

              <div className="flex gap-3">

                <Phone
                  size={18}
                  className="shrink-0 text-indigo-400"
                />

                <span>
                  +880 1XXX-XXXXXX
                </span>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={18}
                  className="shrink-0 text-indigo-400"
                />

                <span>
                  support@urbancart.com
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-sm text-slate-800">
          © 2026 UR. All rights reserved.
        </div>

      </div>

    </footer>
  );
}