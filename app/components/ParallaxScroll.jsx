import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ParallaxScroll = ({ images, videos, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = images.length / 3;

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const firstVideos = videos.slice(0, third);
  const secondVideos = videos.slice(third, 2 * third);
  const thirdVideos = videos.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start  w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-start max-w-5xl xl:max-w-7xl mx-auto gap-20 lg:gap-[6vw] py-40 items-center px-[20vw] md:px-0"
        ref={gridRef}
      >
        {[firstPart, secondPart, thirdPart].map((part, index) => (
          <div className="grid gap-16" key={`grid-${index}`}>
            {part.map((el, idx) => (
              <motion.div
                style={{
                  y:
                    index === 0
                      ? translateFirst
                      : index === 1
                      ? translateSecond
                      : translateThird,
                }}
                key={`grid-${index}-${idx}`}
                className="relative overflow-hidden transition-all duration-300 ease-in-out hover:rounded-se-[6vw] hover:rounded-es-2xl hover:rounded-l-[3.5vw] hover:cursor-pointer"
              >
                <Image
                  src={el}
                  className="object-cover object-left-top w-full h-full hover:cursor-pointer transition-all duration-300 ease-in-out"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
                <video
                  src={
                    index === 0
                      ? firstVideos[idx]
                      : index === 1
                      ? secondVideos[idx]
                      : thirdVideos[idx]
                  }
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"
                  muted
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxScroll;
