"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Teste</button>
      <button onClick={() => setTheme("dark")}>Teste</button>
    </>
  );
};

export default DarkModeButton;
