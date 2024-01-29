import { motion } from "framer-motion";

const Lesson2 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={parent}
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 4, repeat: Infinity }}
      className="size-64 bg-emerald-500 rounded-xl"
    ></motion.div>
  );
};

export default Lesson2;
