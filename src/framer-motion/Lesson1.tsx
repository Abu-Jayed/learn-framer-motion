import { motion } from "framer-motion";

const Lesson1 = () => {
  const initial = { x: 0 };
  const animate = { x: 100, rotate: 222 };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 4 }}
      className="size-64 bg-emerald-500 rounded-xl"
    ></motion.div>
  );
};

export default Lesson1;
