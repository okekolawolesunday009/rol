import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  // Animation variants for reusable effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-surface w-full py-20 px-6 md:px-12 border-t border-outline/30"
      initial="hidden"
      whileInView="visible"  // Triggers on scroll into view
      viewport={{ once: true, amount: 0.3 }}  // Animate once when 30% visible
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12"
          variants={itemVariants}
        >
          {/* Brand */}
          <motion.div
            className="flex flex-col gap-4 text-center md:text-left"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}  // Subtle hover scale
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/" className="font-headline text-xl text-foreground hover:text-tertiary transition-colors">
              RCCG LP17 HQ
            </Link>
            <p className="font-body text-xs tracking-widest uppercase opacity-70 text-tertiary">
              © {new Date().getFullYear()} RCCG LP17 HQ — River Of Life Sanctuary
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            variants={itemVariants}
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-tertiary transition-colors font-body text-xs tracking-widest uppercase"
                whileHover={{ scale: 1.1, color: '#9333ea' }}  // Hover effect with purple color
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6"
            variants={itemVariants}
          >
            {socialIcons.map(({ icon, label }) => (
              <motion.button
                key={label}
                aria-label={label}
                className="material-symbols-outlined text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer text-2xl"
                whileHover={{ scale: 1.2, rotate: 5 }}  // Fun hover rotation
                whileTap={{ scale: 0.95 }}  // Tap feedback
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {icon}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider + Scripture */}
        <motion.div
          className="pt-12 border-t border-outline/30 text-center"
          variants={itemVariants}
          whileHover={{ opacity: 0.8 }}
        >
          <p className="font-headline italic text-on-surface-variant text-sm">
            Jesus Christ is the same yesterday and today and forever. — Hebrews 13:8
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
