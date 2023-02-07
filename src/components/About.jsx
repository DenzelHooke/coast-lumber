import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-index section">
      <div className="global-container">
        <h2 className="heading reg-text">ABOUT US</h2>
        <div className="flex content-wrapper">
          <Image
            alt="family photo"
            width={600}
            height={400}
            src="/assets/family_photo.jpg"
          />
          <p>
            Coast Lumber, established in 1954 in Surrey BC by a family of six,
            has a rich heritage of providing building supplies to the local
            community. The company remains committed to its values of
            sustainability, affordability, and giving back to the community,
            offering eco-friendly solutions and supporting local initiatives. By
            staying true to these values, Coast Lumber sets the standard for
            dependable and ethical building supply solutions, upholding the
            family&apos;s legacy of providing quality service and products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
