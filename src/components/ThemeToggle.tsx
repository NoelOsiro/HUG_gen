"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primaryho text-white rounded-full shadow-solid-7 hover:shadow-solid-8 transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <i className="fas fa-sun text-lg group-hover:rotate-180 transition-transform duration-300"></i>
      ) : (
        <i className="fas fa-moon text-lg group-hover:-rotate-12 transition-transform duration-300"></i>
      )}
    </motion.button>
  );
}
