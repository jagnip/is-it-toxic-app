import { motion } from "framer-motion";

export default function FadeInDownContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
