import { motion } from "framer-motion";

const Lesson2 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={parent}
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 8, repeat: Infinity, delayChildren: 2,staggerChildren:1 }}
      className="size-64 bg-emerald-500 rounded-xl flex gap-5 flex-wrap p-5 items-center justify-center"
    >
      <motion.div
        variants={child}
        className="size-20 bg-cyan-600 rounded"
      ></motion.div>
      <motion.div
        variants={child}
        className="size-20 bg-cyan-600 rounded"
      ></motion.div>
      <motion.div
        variants={child}
        className="size-20 bg-cyan-600 rounded"
      ></motion.div>
      <motion.div
        variants={child}
        className="size-20 bg-cyan-600 rounded"
      ></motion.div>
    </motion.div>
  );
};

export default Lesson2;
