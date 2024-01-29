import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    x: [0, 33, 113, -330,0],
    y: [0, -273, -213, 7,145,0],
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2.6,
      repeat:Infinity,
      opacity: {
        duration: 0.8
      }
    },
  },
};

const Lesson5 = () => {
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
        drag
        dragSnapToOrigin
        // dragConstraints={{ left: -200, top: -200, right: 200, bottom: 200 }}
        dragConstraints={parentRef}
      ></motion.div>
    </div>
  );
};

export default Lesson5;
