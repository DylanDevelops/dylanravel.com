"use client";

import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      color: "bg-yellow-400",
      size: "w-48 h-48 md:w-64 md:h-64",
      initialX: "10%",
      initialY: "5%",
      blur: "blur-3xl",
    },
    {
      id: 2,
      color: "bg-red-500",
      size: "w-56 h-56 md:w-72 md:h-72",
      initialX: "5%",
      initialY: "60%",
      blur: "blur-3xl",
    },
    {
      id: 3,
      color: "bg-purple-500",
      size: "w-52 h-52 md:w-68 md:h-68",
      initialX: "85%",
      initialY: "50%",
      blur: "blur-3xl",
    },
    {
      id: 4,
      color: "bg-blue-500",
      size: "w-40 h-40 md:w-56 md:h-56",
      initialX: "75%",
      initialY: "10%",
      blur: "blur-3xl",
    },
    {
      id: 5,
      color: "bg-yellow-300",
      size: "w-36 h-36 md:w-48 md:h-48",
      initialX: "50%",
      initialY: "80%",
      blur: "blur-3xl",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} ${shape.size} ${shape.blur} opacity-20`}
          style={{
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -30, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 20 + shape.id * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.id * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
