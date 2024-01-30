import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Lesson11 = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 100], [1, 0]);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col flex items-center justify-center">
      <motion.div
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap justify-center items-center"
        style={{ x,scale,opacity }}
        drag={"x"}
      ></motion.div>
    </div>
  );
};

export default Lesson11;
