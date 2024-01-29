import { motion } from "framer-motion";
import { useRef } from "react";

const Lesson5 = () => {
  const parent = {
    hidden: { scale: 0.9, x: 0, y: 0, opacity: 0 },
    visible: {
      opacity: 1,
      x: [0, -85, 100, 131],
      y: [0, 12, -122, 101],
      scale: 1,
      transition: {
        opacity: {
          duration: 1,
        },
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const refFordragUnderParent = useRef(null);

  return (
    <div className="size-[500px] flex items-center justify-center border-2 border-red-800">
      <motion.div
        ref={refFordragUnderParent}
        variants={parent}
        initial={"hidden"}
        animate={"visible"}
        className="size-64 bg-emerald-500  rounded-xl flex gap-5 flex-wrap p-5 items-center justify-center"
      ></motion.div>
    </div>
  );
};

export default Lesson5;
