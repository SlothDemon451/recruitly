import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Partners", href: "/partners" },
    { id: 4, name: "Contact", href: "/contact" },
  ];

  const resources = [
    { id: 1, name: "Blog", href: "/blog" },
    { id: 2, name: "FAQ", href: "/faq" },
    { id: 3, name: "Press", href: "/press" },
    { id: 4, name: "Careers", href: "/careers" },
  ];

  const social = [
    { id: 1, name: "Twitter", href: "https://twitter.com" },
    { id: 2, name: "LinkedIn", href: "https://linkedin.com" },
    { id: 3, name: "Instagram", href: "https://instagram.com" },
    { id: 4, name: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer>
      {/* Blue band */}
      <div className="bg-[#3373d9] px-4 md:px-8 lg:px-16 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-4xl font-bold text-white font-['Climate_Crisis']">
            Footer
          </h2>
          <p className="text-white/80 max-w-md text-center md:text-left">
            Explore our solutions, learn about our trusted partners, and get in
            touch to revolutionize your hiring
          </p>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-md flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="w-10 h-10 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold">
              R
            </div>
            <div className="w-10 h-10 bg-cyan-500 rounded-md flex items-center justify-center text-white font-bold">
              C
            </div>
          </div>
        </div>
      </div>

      {/* Main footer area */}
      <div className="bg-[#5543be] px-4 md:px-8 lg:px-16 py-16 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Copyright */}
          <div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8Z"
                    fill="#5543be"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              © 2025 Recruitly, Inc.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {social.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
