import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson13 = () => {
  const [visible, setVisible] = useState(true);

  const box = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.51,
      y:100,
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col flex items-center justify-center">
      <AnimatePresence>
      <motion.button layout onClick={() => setVisible(!visible)}>Toggle</motion.button>
        {visible && (
          <motion.div
            className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap justify-center items-center"
            variants={box}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
