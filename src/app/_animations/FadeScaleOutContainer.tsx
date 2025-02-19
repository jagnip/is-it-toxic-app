import { motion } from "framer-motion";

export default function FadeScaleOutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 0.9 }}
    transition={{
      duration: 0.4,
      ease: "easeOut",
      opacity: { duration: 0.05 },
    }}
  >
    {children}
  </motion.div>
  );
}
