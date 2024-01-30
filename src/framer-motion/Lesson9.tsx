import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const Lesson9 = () => {
  // const [ref,fn] = useAnimate()

  const [scope, animate] = useAnimate();
  const handleClick = () => {
    // animate(scope.current,{rotate:45})
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0.3 }],
      [scope.current, { opacity: 0.7 }],
      [scope.current, { rotate: 5 }],
      [scope.current, { rotate: 158 }],
    ]);
  };

  // if you want to animate on mount.
  // useEffect(() => {
  //   animate([
  //     [scope.current, { rotate: 45 }],
  //     [scope.current, { opacity: 0.3 }],
  //     [scope.current, { opacity: 0.7 }],
  //     [scope.current, { rotate: 5 }],
  //     [scope.current, { rotate: 158 }],
  //   ]);
  // }, []);

  return (
    <div className="border-2 border-rose-700 size-[500px] flex-col gap-4 flex items-center justify-center">
      <div
        className="mx-auto size-64 bg-teal-400 rounded-xl flex flex-wrap gap-5 justify-center items-center"
        ref={scope}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Lesson9;
