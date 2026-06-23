import { motion } from "framer-motion";

const COUNT = 4;

function Star() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      className="shrink-0 self-center mx-4 md:mx-8"
      style={{ width: "clamp(28px, 5vw, 80px)", height: "clamp(28px, 5vw, 80px)" }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M50 0 L53 47 L100 50 L53 53 L50 100 L47 53 L0 50 L47 47 Z" fill="white" />
    </motion.svg>
  );
}

export default function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-[8vw] sm:py-[6vw] rounded-tr-3xl rounded-tl-3xl bg-[#004D43] relative z-[2] -mt-10 overflow-hidden"
    >
      <div className="border-t border-b border-zinc-200/30 overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10, repeatType: "loop" }}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {Array.from({ length: COUNT }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <h1
                className="font-founders uppercase text-white shrink-0"
                style={{
                  fontSize: "clamp(64px, 18vw, 280px)",
                  lineHeight: 0.88,
                  marginTop: "-2vw",
                  marginBottom: "-1.5vw",
                  paddingLeft: "3vw",
                  paddingRight: "3vw",
                }}
              >
                WE ARE AD AUTOMATIONS
              </h1>
              <Star />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}