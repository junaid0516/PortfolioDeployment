import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "nprogress/nprogress.css"; // Import styles

const Loader = ({ setLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        setLoading(false); // Hide loader completely
      }, 1000); // Match transition duration
    }, 1500); // Loader stays visible for 1.5s
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-[#272727] z-50"
    >
      <motion.div
        className="loading-bar"
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default Loader;
