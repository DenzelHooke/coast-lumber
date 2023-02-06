import { useRef, useEffect } from "react";

import MissionStatement from "@/components/MissionStatement";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main>
        <div className="intro-container">
          <div className="global-container">
            <div className="intro">
              <div ref={logoRef} className="intro-image-container">
                <img src="coast_lumber_logo.png" />
              </div>
              <p className="message">
                Serving Lower Mainland BC builders, contractors & developers
                with lumber & building supplies since 1954
              </p>
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
