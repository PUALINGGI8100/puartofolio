import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLastPath } from "~/hooks/useLastPath";

const Main_Skeleton : React.FC = ()=>{
    // Inisialisasi state berdasarkan localStorage
  const lastPath = useLastPath();
  const storrageKey = `visited-${lastPath}`;
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem(storrageKey);
    }
    return true;
  });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem(storrageKey, "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, storrageKey]);

  return (
 <AnimatePresence>
  {isVisible && (
    <motion.div
      key="skeleton-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="skeleton-main"
      style={{
        position: "absolute",
        // Inset 0 memastikan menempel di semua sisi parent
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 100,
        display: "flex" // Memastikan anak bisa tumbuh
      }}
    >
      <motion.div
        key="skeleton-shimmer"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        style={{
          flex: 1, // Menggantikan 'grow' agar lebih stabil di semua browser
          backgroundColor: "#eeeeeea4",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  )}
</AnimatePresence>
  );
}

export default Main_Skeleton;