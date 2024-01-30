import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  const [btnText, setBtnText] = useState(true);
  const controls = useAnimationControls();

  const handleForward = () => {
    if (btnText) {
      controls.start({ x: 200 });
    } else {
      controls.start({ x: -200 });
    }
    setBtnText(!btnText);
  };

  // useEffect(() => {
  //   controls.start(() => ({ x: 200, transition: { delay: i * 2 } }));
  // }, []);

  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col gap-4 flex items-center justify-center">
      <button
        onClick={() => handleForward()}
        className="p-3 bg-rose-700 rounded-lg text-white font-bold text-xl"
      >
        {btnText ? "Forward" : "Backward"}
        {" >"}
      </button>
      <motion.div
        animate={controls}
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap gap-5 justify-center items-center"
        // custom={1}
        onMouseEnter={() => controls.stop()}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
