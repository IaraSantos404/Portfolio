'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/IaraSantos404', color: '#d4acfe' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/iara-santos-141965287/', color: '#9cdbfe' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:iarassantosdev@gmail.com', color: '#9bf7a9' },
];

export default function FloatingSocialBar() {
  return (
    <div className="fixed bottom-6 sm:bottom-8 left-[60%] -translate-x-1/2 z-50 animate-float-bar">
      <div className="backdrop-blur-sm bg-black/20 rounded-full px-6 py-3 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.37),0_0_0_1px_rgba(255,255,255,0.1)]
        flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:bg-white/10 hover:border-white/25">
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

