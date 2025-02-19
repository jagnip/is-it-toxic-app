import { motion } from "framer-motion";

export default function FadeInDownContainer({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }