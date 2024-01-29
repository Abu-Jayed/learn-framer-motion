import { motion } from "framer-motion";

const Lesson3 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "linear"
      },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial={"hidden"}
      animate={"visible"}
      className="size-64 bg-emerald-500 rounded-xl flex gap-5 flex-wrap p-5 items-center justify-center"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 1}}
    ></motion.div>
  );
};

export default Lesson3;
