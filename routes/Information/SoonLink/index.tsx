"use client";

import { ReactNode, useState, useRef, useEffect } from "react";

const SoonLink = ({ soonMessage, children }: { soonMessage: string; children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  // For touch devices
  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    const touch = e.touches[0];
    setPos({ x: touch.clientX + 10, y: touch.clientY + 10 });
    setVisible(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), 1500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <a
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        style={{ position: "relative", cursor: "default", textDecoration: "underline" }}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </a>
      {visible && (
        <div
          style={{
            position: "fixed",
            top: pos.y,
            left: pos.x,
            background: "var(--color-accent)",
            color: "var(--color-text-on-light)",
            padding: "0.6rem 1.2rem",
            borderRadius: "1.8rem",
            fontSize: "1.8rem",
            pointerEvents: "none",
            zIndex: 9999,
            transition: "opacity 0.2s ease",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            direction: "ltr",
          }}
        >
          {soonMessage}
        </div>
      )}
    </>
  );
};

export default SoonLink;
