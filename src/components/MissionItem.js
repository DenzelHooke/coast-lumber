import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionItem = ({ title, icon, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const missionItemVariant = {
    hidden: {
      opacity: 0,
      y: "50px",
    },
    visible: {
      opacity: isInView ? 100 : 0,
      y: "0px",
      transition: {
        duration: 1.8,
      },
    },
  };
  return (
    <>
      <motion.li ref={ref} variants={missionItemVariant} animate="visible">
        <div className="mission-item">
          <div className="icon-wrap">
            {icon}
            <h4 className="white-text">{title}</h4>
          </div>
          <p className="white-text">{content}</p>
        </div>
      </motion.li>
    </>
  );
};

export default MissionItem;
