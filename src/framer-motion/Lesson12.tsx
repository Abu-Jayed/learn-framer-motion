import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Lesson12 = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollY, "change", (e) => {
  //   console.log(e);
  // });
  // useMotionValueEvent(scrollYProgress, "change", (e) => {
  //   console.log("Progress", e);
  // });

  return (
    <motion.div className="h-10 w-full fixed top-0 bg-indigo-600" style={{scaleX: scrollYProgress}}>

    </motion.div>
  );
};

export default Lesson12;
