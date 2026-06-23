import { useEffect, useRef, useState } from "react";

function Eye({ size = "30vh" }) {
  const eyeRef = useRef(null);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      setRotate(angle-180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="bg-white rounded-full flex justify-center items-center shrink-0"
      style={{ width: size, height: size }}
    >
      <div
        className="bg-zinc-950 rounded-full relative"
        style={{
          width: "67%",
          height: "67%",
          transform: `rotate(${rotate}deg)`,
          transition: "transform 0.08s linear",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center">
          <div
            className="bg-white rounded-full shrink-0"
            style={{ width: "35%", height: "35%", aspectRatio: "1" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Eyes() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen overflow-hidden"
    >
      <div
        className="relative w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[4vw] items-center">
          <Eye size="clamp(100px, 20vw, 260px)" />
          <Eye size="clamp(100px, 20vw, 260px)" />
        </div>
      </div>
    </div>
  );
}