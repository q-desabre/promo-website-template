import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-accent py-4 text-black">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:items-center">
        {/* Left side takes equal space */}
        <p className="flex-1 text-center text-sm font-light md:text-left">
          ©Qtech 2025. All rights reserved
        </p>

        {/* Icons container fixed width and centered */}
        <div className="flex justify-center gap-6 w-48">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right side takes equal space */}
        <a
          href="#privacy-policy"
          className="flex-1 text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
