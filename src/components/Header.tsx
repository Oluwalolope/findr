import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";
import useScrollLock from "../hooks/useScrollLock";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  useScrollLock(isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo darkBackground={false} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#become-a-seller"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Become a Seller
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <button className=" text-black hover:text-black/80 hover:underline cursor-pointer">
              Login
            </button>
            <button className="h-12 px-8 rounded-md bg-black text-white hover:bg-black/80 cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={handleClick}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bg-white w-full min-h-dvh flex flex-col gap-10 left-0 lg:hidden z-50"
            >
              <div className="flex flex-col items-center gap-4">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={handleClick}
                >
                  Home
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={handleClick}
                >
                  How It Works
                </a>
                <a
                  href="#become-a-seller"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={handleClick}
                >
                  Become a Seller
                </a>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={handleClick}
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={handleClick}
                >
                  Contact
                </a>
                <div className="flex flex-col gap-6 pt-2">
                  <button className="w-full">Login</button>
                  <button className="w-full bg-black text-white rounded-4xl py-2 px-6">Get Started</button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
