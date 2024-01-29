import { motion, useCycle } from "framer-motion";

const Lesson7 = () => {
  const [x, cycle] = useCycle(10, -10,40,-37);

  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col gap-4 flex items-center justify-center">
      <motion.div
        animate={{ x: x }}
        onTap={()=> cycle()}
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap gap-5 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Lesson7;
