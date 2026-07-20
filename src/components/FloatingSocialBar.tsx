'use client'

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com', color: '#d4acfe' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#9cdbfe' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: '#ff94d4' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:ana@email.com', color: '#9bf7a9' },
];

export default function FloatingSocialBar() {
  return (
    <div className="fixed bottom-6 sm:bottom-8 left-[60%] -translate-x-1/2 z-50 animate-float-bar">
      <div className="glass rounded-full px-6 py-3 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:bg-[#151515]/95">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group relative p-2 transition-all duration-200"
          >
            <link.icon
              size={20}
              className="text-[#666666] transition-all duration-200 group-hover:scale-[1.15]"
              style={{
                color: undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as SVGElement).style.color = link.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as SVGElement).style.color = '#666666';
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

