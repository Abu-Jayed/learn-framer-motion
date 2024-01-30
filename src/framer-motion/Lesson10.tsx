import { motion, useDragControls } from "framer-motion";

const Lesson10 = () => {
  const controls = useDragControls();
  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col flex items-center justify-center">
      <div
        className="mx-auto w-64 h-10 bg-orange-400 rounded-xl flex flex-wrap  justify-center items-center"
        onPointerDown={(e) => controls.start(e)}
      ></div>
      <motion.div
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap justify-center items-center"
        drag={"x"}
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson10;
