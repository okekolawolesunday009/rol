import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiDonateHeart } from "react-icons/bi";
import logo from '../assets/rccg.png';

const navLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Sermons', href: '#audio-sermons' },
  { label: 'Community', href: '#gallery' },
  { label: 'Events', href: '#events' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);
    if (!isHome) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navThemeClasses = 'bg-gray-100  text-foreground border-b border-outline shadow-sm glass-nav backdrop-blur-sm';

  const linkTheme = ' text-black hover:text-primary';

  const buttonTheme = 'hover:text-slate-800';

  return (
    <nav
      className={`fixed top-0 w-full z-50  ${navThemeClasses}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          {/* <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center transition-all group-hover:bg-primary/10">
            <span className="text-primary font-headline text-xl italic">Ω</span>
          </div>
          <span className="text-2xl font-headline text-background tracking-tighter uppercase">
            RCCG LP17 HQ
          </span> */}

          {/* <img src={logo} alt="RCCG LP17 HQ Logo" width={50} height={50} className="w-[250px] h-[200px] bg-red-500" /> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleAnchorClick(link.href);
                }
              }}
              className={`${linkTheme} transition-colors text-background duration-300 font-headline italic text-lg tracking-tight`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block font-headline italic text-lg tracking-tight  transition-all duration-300"
          >
            <span className='flex space-x-4'>
              <BiDonateHeart className="inline text-2xl text-red-500" />
            Give
            </span>
            
          </a>
          {/* Mobile Menu Button */}
          <button
            id="navbar-menu-toggle"
            aria-label="Toggle navigation menu"
            className={`md:hidden ${buttonTheme} transition-colors`}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-slate-950/95 border-white/5 backdrop-blur-xl border-t px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleAnchorClick(link.href);
                }
              }}
              className="block text-background hover:text-amber-100 font-headline italic text-xl py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block font-headline italic text-xl py-2 "
          >
            Give
          </a>
        </div>
      )}
    </nav>
  );
}
