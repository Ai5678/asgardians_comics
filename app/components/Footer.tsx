import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import logoHorizontal from "../../images/logo_horizontal.png";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Tournament Center", href: "#" },
  { label: "Buying & Trading", href: "#" },
  { label: "About", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Image src={logoHorizontal} alt="Asgardians Comics" width={160} height={44} />
            <p
              className="text-zinc-400 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The definitive hub for modern collectors. First-look access to variant covers, rare trades, and the latest releases.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-zinc-500 text-xs font-black uppercase tracking-widest hover:text-(--primary) transition-colors"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="text-sm font-black uppercase tracking-widest text-[var(--secondary)] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors hover:[transform:skewX(-6deg)] inline-block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-black uppercase tracking-widest text-[var(--secondary)] mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Find Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[var(--primary)]" />
                <span style={{ fontFamily: "var(--font-body)" }}>123 Asgard Avenue,<br />Downtown Metropolis</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone size={16} className="shrink-0 text-[var(--primary)]" />
                <span style={{ fontFamily: "var(--font-body)" }}>(555) 867-5309</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail size={16} className="shrink-0 text-[var(--primary)]" />
                <a
                  href="mailto:hello@asgardianscomics.com"
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  hello@asgardianscomics.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-zinc-600 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            &copy; {new Date().getFullYear()} Asgardians Comics. All rights reserved.
          </p>
          <p
            className="text-zinc-700 text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Excelsior.
          </p>
        </div>
      </div>
    </footer>
  );
}
