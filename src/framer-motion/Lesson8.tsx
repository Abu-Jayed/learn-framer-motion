import { inView, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Lesson8 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  // const isInView = useInView(ref,{once:true});
  console.log(isInView);
  // useEffect(() => {
  //   inView(ref.current as ElementOrSelector, (info) => {
  //     console.log("in view",info);
  //   });
  // }, []);
  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col gap-4 flex items-center justify-center">
      <motion.div
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap gap-5 justify-center items-center"
        ref={ref}
        animate={isInView ? {opacity: 1,x:0,transition:{delay:0.3,duration:1.2}} : {opacity: 1, x:-35}}
      ></motion.div>
    </div>
  );
};

export default Lesson8;
