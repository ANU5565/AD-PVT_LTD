import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function LinkItem({ href, children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay, ease: EASE }}
      whileHover={{ x: 3 }}
      className="text-sm text-white underline underline-offset-2 hover:text-white/50 transition-colors duration-200 block w-fit"
    >
      {children}
    </motion.a>
  );
}

const socials = ["Instagram", "Behance", "Facebook", "Linkedin"];
const menu = ["Home", "Services", "Our work", "About us", "Insights", "Contact us"];

export default function Footer() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <div className="w-full bg-zinc-950 text-white font-neue flex flex-col px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 pb-8">

      {/* ── Big title ── */}
      <div ref={titleRef} className="w-full mb-12 sm:mb-16">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={titleInView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="font-founders font-black uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(44px, 11vw, 160px)" }}
          >
            WE-AUTOMATE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={titleInView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-founders font-black uppercase leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(44px, 11vw, 160px)" }}
          >
            WHAT MATTERS
          </motion.h1>
        </div>
      </div>

      {/* ── Info grid ── */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-8 mb-14 sm:mb-20">

        {/* Socials */}
        <FadeUp delay={0.05}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">S:</p>
          <div className="flex flex-col gap-2">
            {socials.map((s, i) => (
              <LinkItem key={s} href="#" delay={0.08 + i * 0.04}>{s}</LinkItem>
            ))}
          </div>
        </FadeUp>

        {/* Locations */}
        <FadeUp delay={0.1}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">L:</p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <LinkItem href="#" delay={0.12}>202-1965 W 4th Ave</LinkItem>
              <LinkItem href="#" delay={0.15}>Vancouver, Canada</LinkItem>
            </div>
            <div className="flex flex-col gap-1">
              <LinkItem href="#" delay={0.18}>30 Chukarina St</LinkItem>
              <LinkItem href="#" delay={0.21}>Lviv, Ukraine</LinkItem>
            </div>
          </div>
        </FadeUp>

        {/* Email */}
        <FadeUp delay={0.15}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">E:</p>
          <LinkItem href="mailto:hello@ad.automation" delay={0.18}>
            hello@ad.automation
          </LinkItem>
        </FadeUp>

        {/* Menu */}
        <FadeUp delay={0.2}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">M:</p>
          <div className="flex flex-col gap-2">
            {menu.map((item, i) => (
              <LinkItem key={item} href="#" delay={0.22 + i * 0.04}>{item}</LinkItem>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* ── Divider ── */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: EASE }}
        className="w-full border-t border-white/10 mb-5"
      />

      {/* ── Bottom bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0"
      >
        <div className="flex items-center gap-1 text-xs text-white/40">
          <span>AD Automations</span>
          <span className="text-[#cdea68]">·</span>
        </div>

        <p className="text-xs text-white/40">
          © AD Automations 2026.{" "}
          <a href="#" className="underline underline-offset-2 hover:text-white/70 transition-colors duration-200">
            Legal Terms
          </a>
        </p>

        <p className="text-xs text-white">Website by ANUU</p>
      </motion.div>

    </div>
  );
}
