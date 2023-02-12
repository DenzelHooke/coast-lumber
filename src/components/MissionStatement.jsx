import React from "react";
import { BsCashCoin, BsTree, BsHouseDoor } from "react-icons/bs";
import MissionItem from "./MissionItem";
import Image from "next/image";

const MissionStatement = () => {
  return (
    <section className="mission-statement section dark-black-bg white-text">
      <div className="global-container">
        <div className="statement-wrapper">
          <h2 id="bold-statement" className="reg-text white-text">
            Making a <span className="bold-text">difference</span>
          </h2>
          <Image
            width={300}
            height={11}
            sizes="
            (max-width: 450px),
            "
            src="/assets/rectangle_7.svg"
            id="statement-underline"
            alt=""
          />
        </div>
        <ul className="flex mission-items-wrapper">
          <MissionItem
            title="Sustainability"
            icon={<BsTree />}
            content="Our mission at Coast Lumber is to responsibly and sustainably
                harvest and process wood products while preserving the natural
                environment and supporting the local community."
          />
          <MissionItem
            title={"Affordability"}
            icon={<BsCashCoin />}
            content="Coast Lumber offers cost-effective solutions for customers looking
            for high-quality building materials. With competitive pricing and
            a wide range of products, customers can find the materials they
            need to complete their projects without breaking the bank."
          />
          <MissionItem
            title="Community"
            icon={<BsHouseDoor />}
            content="At Coast Lumber, our mission is to be a responsible and
            compassionate partner in the community by offering top-quality
            building materials while prioritizing sustainability and
            minimizing our impact on the environment."
          />
        </ul>
      </div>
    </section>
  );
};

export default MissionStatement;
