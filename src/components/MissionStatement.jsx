import React from "react";
import { BsCashCoin, BsTree, BsHouseDoor } from "react-icons/bs";
const MissionStatement = () => {
  return (
    <section className="mission-statement global-container section">
      <div className="statement-wrapper">
        <h2 id="bold-statement" className="reg-text">
          Making a <span className="bold-text">difference</span>
        </h2>
        <img src="/assets/rectangle_7.svg" id="statement-underline" />
      </div>

      <ul className="flex mission-items-wrapper">
        <li>
          <div className="mission-item">
            <div className="icon-wrap">
              <BsTree />
              <h4>Sustainability</h4>
            </div>
            <p>
              Our mission at Coast Lumber is to responsibly and sustainably
              harvest and process wood products while preserving the natural
              environment and supporting the local community.
            </p>
          </div>
        </li>
        <li>
          <div className="mission-item">
            <div className="icon-wrap">
              <BsCashCoin />
              <h4>Affordability</h4>
            </div>
            <p>
              Coast Lumber offers cost-effective solutions for customers looking
              for high-quality building materials. With competitive pricing and
              a wide range of products, customers can find the materials they
              need to complete their projects without breaking the bank.
            </p>
          </div>
        </li>
        <li>
          <div className="mission-item">
            <div className="icon-wrap">
              <BsHouseDoor />
              <h4>Community</h4>
            </div>
            <p>
              At Coast Lumber, our mission is to be a responsible and
              compassionate partner in the community by offering top-quality
              building materials while prioritizing sustainability and
              minimizing our impact on the environment.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MissionStatement;
