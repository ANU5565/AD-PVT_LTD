import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "AD Automations",
    tags: ["Brand Identity", "Pitch deck", "Strategy", "Website"],
    img: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
    href: "",
  },
  {
    id: "02",
    title: "Aether Labs",
    tags: ["Conference", "Executive Keynote", "Product Launch"],
    img: "https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
    href: "",
  },
  {
    id: "03",
    title: "Soma Energy",
    tags: ["Brand Identity", "Pitch deck", "Strategy"],
    img: "https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png",
    href: "",
  },
  {
    id: "04",
    title: "AH2 & Matt Horn",
    tags: ["Pitch deck"],
    img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
    href: "",
  },
  {
    id: "05",
    title: "Vise",
    tags: ["Agency", "Company Presentation"],
    img: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
    href: "",
  },
  {
    id: "06",
    title: "Softstart",
    tags: ["Branded Template", "Sales Deck"],
    img: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
    href: "",
  },
  {
    id: "07",
    title: "Fyde",
    tags: ["Audit", "Copywriting", "Sales Deck", "Slides Design"],
    img: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
    href: "",
  },
  {
    id: "08",
    title: "All Things Go",
    tags: ["Brand Identity", "Pitch deck"],
    img: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
    href: "",
  },
  {
    id: "09",
    title: "Trawa",
    tags: ["Brand Identity", "Design Research", "Investor Deck"],
    img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
    href: "",
  },
  {
    id: "10",
    title: "Cardboard Spaceship",
    tags: ["Branded Template", "Sales Deck", "Social Media Templates"],
    img: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
    href: "",
  },
  {
    id: "11",
    title: "Premium Blend",
    tags: ["Branded Template"],
    img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
    href: "",
  },
];

const rows = [];
for (let i = 0; i < projects.length; i += 2) {
  rows.push(projects.slice(i, i + 2));
}

const EASE = [0.76, 0, 0.24, 1];

function Arrow({ active }) {
  return (
    <motion.div
      animate={{
        backgroundColor: active ? "#cdea68" : "transparent",
        borderColor: active ? "#cdea68" : "rgba(255,255,255,0.25)",
        rotate: active ? 45 : 0,
      }}
      transition={{ duration: 0.4, ease: EASE }}
      className="w-9 h-9 md:w-11 md:h-11 rounded-full border flex items-center justify-center shrink-0"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#1a1a1a" : "rgba(255,255,255,0.6)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </motion.div>
  );
}

function MobileCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 cursor-pointer"
      style={{ minHeight: open ? "72vw" : "52vw" }}
      onClick={() => setOpen((v) => !v)}
    >
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      <motion.div
        animate={{ opacity: open ? 0.82 : 0.38 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(160deg, rgba(9,9,11,0.1) 0%, rgba(9,9,11,0.9) 100%)",
        }}
      />

      <div className="relative z-20 flex items-start justify-between gap-2 p-5 pb-0">
        <div className="flex items-start gap-3">
          <motion.span
            animate={{ color: open ? "rgba(205,234,104,0.6)" : "rgba(255,255,255,0.3)" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.12em] font-light shrink-0 pt-1"
          >
            {project.id}
          </motion.span>
          <motion.h3
            animate={{ color: open ? "#cdea68" : "#ffffff" }}
            transition={{ duration: 0.3 }}
            className="font-neue font-normal leading-tight m-0 text-[5vw] tracking-tight"
          >
            {project.title}
          </motion.h3>
        </div>
        <Arrow active={open} />
      </div>

      <motion.div
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 12 }}
        transition={{ duration: 0.35, delay: open ? 0.08 : 0, ease: EASE }}
        className="relative z-20 flex flex-wrap gap-1.5 px-5 pb-5 pt-3"
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] rounded-full px-3 py-1"
            style={{
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function DesktopCard({ project, hovered, onEnter, onLeave, isRowHovered }) {
  const isActive = hovered;
  const isShrunk = isRowHovered && !hovered;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={{ flex: isActive ? 1.5 : isShrunk ? 0.5 : 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative overflow-hidden rounded-2xl no-underline flex flex-col justify-between cursor-pointer bg-zinc-950"
      style={{ minHeight: "42vw", maxHeight: "42vw" }}
    >
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center block z-0"
      />

      <motion.div
        animate={{ opacity: isActive ? 0.82 : 0.35 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(160deg, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.92) 100%)",
        }}
      />

      <div className="relative z-20 flex items-start justify-between gap-3 p-7 pb-0">
        <div className="flex items-start gap-4">
          <motion.span
            animate={{
              color: isActive ? "rgba(205,234,104,0.6)" : "rgba(255,255,255,0.3)",
            }}
            transition={{ duration: 0.35 }}
            className="text-[11px] tracking-[0.12em] font-light shrink-0 pt-1"
          >
            {project.id}
          </motion.span>
          <motion.h3
            animate={{ color: isActive ? "#cdea68" : "#ffffff" }}
            transition={{ duration: 0.35 }}
            className="font-neue font-normal leading-[1.05] m-0 text-[clamp(18px,2.2vw,32px)] tracking-tight"
          >
            {project.title}
          </motion.h3>
        </div>
        <Arrow active={isActive} />
      </div>

      <motion.div
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 14 }}
        transition={{ duration: 0.38, delay: isActive ? 0.1 : 0, ease: EASE }}
        className="relative z-20 flex flex-wrap gap-1.5 px-7 pb-7 pt-0"
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] rounded-full px-3 py-1 tracking-[0.01em]"
            style={{
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.a>
  );
}

function DesktopRow({ pair }) {
  const [hoveredId, setHoveredId] = useState(null);
  const isRowHovered = hoveredId !== null;

  return (
    <div className="hidden md:flex gap-2.5 w-full">
      {pair.map((project) => (
        <DesktopCard
          key={project.id}
          project={project}
          hovered={hoveredId === project.id}
          isRowHovered={isRowHovered}
          onEnter={() => setHoveredId(project.id)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

function MobileRow({ pair }) {
  return (
    <div className="flex md:hidden flex-col gap-2.5 w-full">
      {pair.map((project) => (
        <MobileCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full bg-zinc-950"
    >
      <div className="w-full px-5 md:px-10 pt-12 md:pt-16 pb-8 md:pb-10 flex items-end justify-between border-b border-white/8 mb-2.5">
        <h2 className="font-neue text-[clamp(32px,5vw,66px)] font-normal text-white tracking-[-0.03em] leading-none m-0">
          Featured
          <br />
          projects
        </h2>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-[11px] md:text-xs text-white/70 border border-white/20 rounded-full px-4 py-2.5 md:px-5 md:py-3 no-underline mb-1 transition-all duration-300 hover:bg-[#cdea68] hover:text-zinc-900 hover:border-[#cdea68]"
        >
          View all ↗
        </a>
      </div>

      <div className="px-5 md:px-10 pb-16 md:pb-20 flex flex-col gap-2.5">
        {rows.map((pair, i) => (
          <div key={i}>
            <MobileRow pair={pair} />
            <DesktopRow pair={pair} />
          </div>
        ))}
      </div>
    </div>
  );
}