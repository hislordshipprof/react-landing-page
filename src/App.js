import React from 'react'
import { Features,Download,SectionWrapper } from "./components";
import assets from './assets';
import styles from './styles/Global';
import '../src/index.css'

const  App=()=> {
  return (
    <>
 
      <div className="Navbar">
        <div className="wrapper">
          <div className="search">
            <img className="navimg" src={assets.log} alt="tabemperioum" />
          </div>
          <div className="item">
            <ul className="list">
              <li className="list-item">Gallery</li>
            
              <li className="list-item">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionWrapper
        title="Welcome to Tabs Emporium Photostudio"
        description="For all your Photo related works ranging from Picture Frame, Birthday Photoshoot, Pencil Frames, Picture on Clocks, & Canvas works, We got you covered!!   
         With Over 2.5+ Million customers we have the best deals nationwide!!"
        showBtn
        mockupImg={assets.tab}
        banner="banner"
      />

      <SectionWrapper
        title="Tabs Emporium Marketplace"
        description="Experience a buttery designs of Tabs Marketplace. Smooth constant colors of a fluent Picture Frame design."
        mockupImg={assets.tab2}
        reverse
      />
      

      <Features />
      <SectionWrapper
        title="Pencil on Paper"
        description="This Frame is built using pencil on paper which gives an eligant look of the indiviual'. You can easily get your picture reformed  into this kind of Pencil on Paper Art"
        mockupImg={assets.tab3}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the Designs"
        description="Is there that special person you wonna suprise with a picture frame of yourself and the person?.Wondering where to get that sleek elegant design?. Tab Emporium got you covered. Let surpirse that special person today!! Yes we do double Frames!!"
        mockupImg={assets.tab4}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Designed and Made By <span className="bold">Hpal Academy</span>
        </p>
      </div>
    </>
  );
}

export default App;
