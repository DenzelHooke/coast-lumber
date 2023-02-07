import { useRef, useEffect } from "react";

import MissionStatement from "@/components/MissionStatement";
import About from "@/components/About";
import Services from "@/components/Services";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <div className="intro-container">
          <div className="global-container">
            <div className="intro">
              <motion.div
                className="intro-image-container"
                drag
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
                <img src="coast_lumber_logo.png" />
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
