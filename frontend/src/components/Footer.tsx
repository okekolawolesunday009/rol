import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Location', href: '#' },
];

const socialIcons = [
  { icon: 'groups', label: 'Facebook' },
  { icon: 'play_circle', label: 'YouTube' },
  { icon: 'share', label: 'Share' },
];

export default function Footer() {
  return (
    <footer className="bg-surface w-full py-20 px-6 md:px-12 border-t border-outline/30">
      <div className="max-w-7xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link to="/" className="font-headline text-xl text-foreground hover:text-tertiary transition-colors">
              RCCG LP17 HQ
            </Link>
            <p className="font-body text-xs tracking-widest uppercase opacity-70 text-tertiary">
              © {new Date().getFullYear()} RCCG LP17 HQ — The Digital Sanctuary
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-tertiary transition-colors font-body text-xs tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialIcons.map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="material-symbols-outlined text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer text-2xl"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Divider + Scripture */}
        <div className="pt-12 border-t border-outline/30 text-center">
          <p className="font-headline italic text-on-surface-variant text-sm">
            Jesus Christ is the same yesterday and today and forever. — Hebrews 13:8
          </p>
        </div>
      </div>
    </footer>
  );
}
