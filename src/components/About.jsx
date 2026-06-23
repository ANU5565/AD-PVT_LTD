import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.22"
      className="w-full bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl py-16 sm:py-20 overflow-hidden"
      style={{ position: "relative", zIndex: 4 }}
    >
      <FadeUp>
        <h2 className="font-neue text-zinc-950 px-5 sm:px-10 lg:px-15 text-[7.5vw] sm:text-[5.5vw] md:text-[4vw] leading-[1.15]">
          We craft category-defining AI automations, intelligent workflows, and digital
          experiences that drive efficiency, innovation, and long-term business growth.
        </h2>
      </FadeUp>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="border-t border-[#9aae53] mt-10 md:mt-20"
      />

      <div className="flex flex-col md:flex-row justify-between px-5 sm:px-10 lg:px-15 mt-5 font-neue text-zinc-950">
        <FadeUp delay={0.05}>
          <p className="text-sm md:text-base py-4 md:shrink-0">What you can expect:</p>
        </FadeUp>
        <div className="md:w-1/3 text-sm md:text-base">
          {[
            "We don't just automate workflows. We build intelligent AI systems that eliminate repetitive work, accelerate growth, and let businesses focus on what truly matters.", 
            "Our automation solutions help startups, creators, agencies, and enterprises streamline operations using AI Agents, RAG systems, machine learning, and intelligent workflows.",
            "From customer support and lead generation to document processing, business intelligence, and end-to-end workflow automation, we create AI solutions that work around the clock."          ].map((text, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <p className="py-4 leading-relaxed">{text}</p>
            </FadeUp>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="border-t border-[#9aae53] mt-10 md:mt-20"
      />

      <div className="flex flex-col md:flex-row px-5 sm:px-10 lg:px-15 py-10 gap-8 md:gap-10">
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
          <FadeUp delay={0.05}>
            <h1 className="font-neue text-zinc-950 text-[9vw] sm:text-[6vw] md:text-[3.5vw] leading-tight">
              How we can help:
            </h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#18181b" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="flex gap-8 items-center px-7 py-4 sm:px-8 sm:py-5 mt-2 bg-zinc-950 text-white rounded-full uppercase text-xs sm:text-sm tracking-widest w-fit"
            >
              Read More
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-zinc-100 rounded-full shrink-0"
              />
            </motion.button>
          </FadeUp>
        </div>

        <motion.div
          ref={imgRef}
          className="w-full md:w-1/2 rounded-3xl overflow-hidden"
          style={{ height: "clamp(240px, 60vw, 480px)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <motion.img
            style={{ scale: imgScale }}
            className="w-full h-full object-cover block"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="AD team"
          />
        </motion.div>
      </div>
    </div>
  );
}