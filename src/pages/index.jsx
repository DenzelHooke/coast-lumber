import { useRef, useEffect } from "react";

import MissionStatement from "@/components/MissionStatement";
import About from "@/components/About";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="intro-container">
          <div className="global-container">
            <div className="intro">
              <motion.div
                className="intro-image-container"
                animate={{
                  opacity: 100,
                }}
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3,
                }}
              >
                <Image
                  src="/coast_lumber_logo.png"
                  alt="logo"
                  width={900}
                  height={500}
                />
              </motion.div>
              <motion.p
                className="message"
                animate={{
                  opacity: 100,
                }}
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3,
                  delay: 2,
                }}
              >
                Serving Lower Mainland BC builders, contractors & developers
                with lumber & building supplies since 1954
              </motion.p>
            </div>
          </div>
        </div>
        <MissionStatement />
        <About />
        <Services />
      </main>
    </>
  );
}
