import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Tabs Emporium Gallery
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            List of amazing works for Happy clients 
          </p>
        </div>
        <button className={styles.btnPrimary}>Let Go!!</button>
          
          {/* <div className={styles.flexCenter}>
            <img
              src={assets.tab2}
              alt="download_png"
              className={styles.fullImg}
            />
          
            
           
          </div>
          <div className={styles.flexCenter}>
            <img
              src={assets.tab}
              alt="download_png"
              className={styles.fullImg}
            />
           
          
          
          </div> */}
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab1} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pencil Art</div>
        
      </div>
     
    </div>
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab4} alt="River" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Double Art</div>
        
      </div>
     
    </div>

    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab2} alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Picture Frame</div>
      </div>
  
    </div>
  </div>
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab1} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pencil Art</div>
        
      </div>
     
    </div>
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab4} alt="River" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Double Art</div>
        
      </div>
     
    </div>

    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab2} alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Picture Frame</div>
      </div>
  
    </div>
  </div>
          <div class="p-7 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-4">
   
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={assets.tab1} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pencil Art</div>
        
      </div>
     
    </div>
    <div class="rounded overflow-hidden shadow-lg">
      
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Pencil Art</div>
        
      </div>
     
    </div>
   
   

    
  </div>
        
</div>


      </div>
    
  );
};

export default Download;
