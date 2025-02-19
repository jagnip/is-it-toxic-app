import { motion } from "framer-motion";

export default function ScaleInContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        opacity: { duration: 0.05 },
      }}
    >
      {children}
    </motion.div>
  );
}
