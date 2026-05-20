import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";
import logoHorizontal from "../../images/logo_horizontal.png";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-5 sticky top-0 z-50 bg-black border-b-4 border-white">

      {/* Left: Logo + Nav links */}
      <div className="flex items-center gap-12">
        <a href="/">
          <Image src={logoHorizontal} alt="Asgardians Comics" width={180} height={50} />
        </a>

        <nav
          className="hidden md:flex items-center gap-8 text-medium font-black uppercase tracking-tighter"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          <a
            className="inline-block text-[var(--secondary)] border-b-4 border-[var(--secondary)] pb-1"
            href="#"
          >
            Products
          </a>
          <a
            className="inline-block text-white transition-all duration-100 hover:text-[var(--primary)] hover:[transform:skewX(-10deg)_translateY(-2px)]"
            href="#"
          >
            Tournament Center
          </a>
          <a
            className="inline-block text-white transition-all duration-100 hover:text-[var(--primary)] hover:[transform:skewX(-10deg)_translateY(-2px)]"
            href="#"
          >
            Buying &amp; Trading
          </a>
          <a
            className="inline-block text-white transition-all duration-100 hover:text-[var(--primary)] hover:[transform:skewX(-10deg)_translateY(-2px)]"
            href="#"
          >
            About
          </a>
        </nav>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-[var(--primary)] transition-colors cursor-pointer">
          <ShoppingCart size={28} />
        </button>
        <button className="text-white hover:text-[var(--primary)] transition-colors cursor-pointer">
          <User size={28} />
        </button>
      </div>

    </header>
  );
}
