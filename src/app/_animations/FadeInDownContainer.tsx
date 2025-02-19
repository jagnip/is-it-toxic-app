import { motion } from "framer-motion";

export default function FadeInDownContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        opacity: { delay: 0.05, duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}
