import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const EASE = [0.76, 0, 0.24, 1];
const lines = ["WE  BUILD", "THE-FUTURE", "OF AUTOMATIONS"];
const bottomItems = ["Custom Automation agency", "For innovation teams and global brands"];

export default function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-950 pt-1 relative z-[1] pb-20 flex flex-col justify-between"
    >
      <div className="textbanner mt-20 sm:mt-24 md:mt-32 px-5 md:px-15">
        {lines.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <div className="w-full flex items-center gap-2 md:gap-3">
              {index === 1 && (
                <motion.div
                  initial={{ width: "0%", opacity: 0 }}
                  animate={{ width: "clamp(40px, 9vw, 120px)", opacity: 1 }}
                  transition={{ ease: EASE, duration: 1, delay: 0.6 }}
                  className="rounded-[0.5vw] overflow-hidden shrink-0"
                  style={{ height: "clamp(28px, 5.5vw, 80px)" }}
                >
                  <img
                    src="\public\Logo.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              )}
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ ease: EASE, duration: 0.9, delay: 0.2 + index * 0.12 }}
                className="font-founders uppercase font-semibold text-white will-change-transform"
                style={{ fontSize: "clamp(52px, 12vw, 160px)", lineHeight: 0.88 }}
              >
                {item}
              </motion.h1>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 md:px-15 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: EASE, duration: 0.8, delay: 0.85 }}
          className="border-t border-zinc-700"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: EASE, duration: 0.8, delay: 0.95 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 sm:py-6 gap-5 sm:gap-4 md:gap-0"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-16">
            {bottomItems.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: EASE, duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="font-neue font-light text-white text-xs sm:text-sm md:text-base"
              >
                {item}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: EASE, duration: 0.6, delay: 1.15 }}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div className="px-5 py-2 border rounded-full font-neue border-zinc-600 uppercase text-[10px] sm:text-xs tracking-wider text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              Start the project
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-600 text-white group-hover:bg-white group-hover:text-black transition-all duration-300 text-sm">
              <MdOutlineArrowOutward />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}