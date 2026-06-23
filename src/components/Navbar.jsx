import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];
const links = ["Services", "Our work", "About us", "Insights", "Contact us"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="fixed z-[999] w-full px-5 md:px-15 py-4 md:py-5 font-neue flex justify-between items-center transition-all duration-500"
        style={{
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          backgroundColor: scrolled || menuOpen ? "rgba(9,9,11,0.9)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="logo text-white"
        >
          <svg width="72" height="30" viewBox="0 0 72 30" xmlns="http://www.w3.org/2000/svg">
            <text
              x="0"
              y="23"
              font-family="Inter, Poppins, Arial, sans-serif"
              font-size="28"
              font-weight="700"
              fill="currentColor"
              letter-spacing="-1">
              AD
            </text>
          </svg>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 items-center">
            {links.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + index * 0.07, ease: EASE }}
                whileHover={{ opacity: 0.5 }}
                className={`cursor-pointer text-[15px] font-light capitalize text-white transition-opacity duration-200 ${
                  index === links.length - 1 ? "md:ml-32 lg:ml-52" : ""
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 cursor-pointer z-[1000] relative"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="block h-[1.5px] bg-white rounded-full"
              style={{ width: "100%" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="block h-[1.5px] bg-white rounded-full w-[70%]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="block h-[1.5px] bg-white rounded-full"
              style={{ width: "55%" }}
            />
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[998] bg-zinc-950 flex flex-col justify-between px-5 pt-24 pb-10 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: EASE }}
                  className="font-founders text-white uppercase border-b border-white/10 py-5 text-[11vw] leading-none tracking-tight hover:text-[#cdea68] transition-colors duration-200"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
              className="flex flex-col gap-3"
            >
              <p className="text-xs text-white/40 uppercase tracking-widest font-neue">Get in touch</p>
              <a href="mailto:anurp911@gmail.com" className="font-neue text-sm text-white underline underline-offset-2">
                hello@AD.automation
              </a>
              <div className="flex gap-5 mt-2">
                {["Instagram", "Behance", "LinkedIn"].map((s) => (
                  <a key={s} href="#" className="text-xs text-white/50 font-neue hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
