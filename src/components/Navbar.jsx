import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "@utils/useIsMobile";
import { useTheme } from "./ThemeProvider";

const navItems = ["Home", "About", "Features", "Product", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const { theme, nextTheme } = useTheme();

  useEffect(() => {
    if (isMobile) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible, isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={navContainerRef}
      style={{ opacity: 1 }}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="./img/logo.png" alt="logo" className="w-16" />
          </div>

          <div className="flex h-full items-center mr-10">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  nextTheme();
                }}
                className="nav-hover-btn"
              >
                Change Theme
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
