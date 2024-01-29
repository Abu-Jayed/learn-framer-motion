import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.7,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  hover: {
    opacity: 1,
  },
};

const Lesson3 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="border-2 border-rose-700 size-[500px] flex items-center justify-center"
    >
      <motion.div
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap gap-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragSnapToOrigin
        // dragConstraints={{ left: -200, top: -200, right: 200, bottom: 200 }}
        dragConstraints={parentRef}
      ></motion.div>
    </div>
  );
};

export default Lesson3;
