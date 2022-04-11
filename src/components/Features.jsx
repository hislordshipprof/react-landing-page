import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Tab Emporium designs works with ultra modern tech equipments to deliver the very best for customer satisfaction
            
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.ai} iconText="Adobe Illustrator" />
          <FeatureCard iconUrl={assets.ps} iconText="Adobe Photoshop" />
          <FeatureCard iconUrl={assets.lr} iconText="Adobe Lightroom" />
         
        </div>
      </div>
    </div>
  );
};

export default Features;
