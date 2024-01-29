import { motion } from "framer-motion";
import { useRef } from "react";

const Lesson4 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "linear",
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        // dragConstraints={{left:-222, right:111,}}
        dragConstraints={refFordragUnderParent}
        drag
      ></motion.div>
    </div>
  );
};

export default Lesson4;
