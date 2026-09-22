"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Updates", href: "#linkedin" },
    { label: "Links", href: "#socials" },
  ];

  return (
    <ul
      style={{
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        width: 'fit-content',
        maxWidth: '90vw',
        overflowX: 'auto',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4px',
        backgroundColor: 'rgba(var(--bg-rgb), 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        listStyle: 'none',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)',
      }}
      className="no-scrollbar"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navItems.map((item) => (
        <Tab key={item.href} setPosition={setPosition} href={item.href}>
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

interface Position {
  left: number;
  width: number;
  opacity: number;
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      whileHover={{ y: -1 }}
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'block',
        cursor: 'pointer',
        padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1.25rem)',
        flexShrink: 0,
        color: 'var(--fg)',
        fontWeight: 500,
        fontSize: 'clamp(0.78rem, 2vw, 0.9rem)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'color 0.3s ease'
      }}
    >
      <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {children}
      </a>
    </motion.li>
  );
};


const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      style={{
        position: 'absolute',
        zIndex: 0,
        borderRadius: '9999px',
        backgroundColor: 'rgba(var(--fg-rgb), 0.08)',
        boxShadow: '0 0 15px rgba(255, 19, 19, 0.1)',
        height: 'calc(100% - 8px)',
        top: '4px',
      }}
    />
  );
};

export default NavHeader;
