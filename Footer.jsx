import React from "react";
import img1footer from '../assets/img1footer.svg';
import img2footer from '../assets/img2footer.svg';
import img3footer from '../assets/img3footer.svg';
import img4footer from '../assets/img4footer.svg';

const Footer = () => {
  return (
    
        <div className="flex  gap-6 m-auto">
        <img src={img2footer} alt="Image 2" className="w-1/5 h-4 " />
        <img src={img1footer} alt="Image 1" className="w-16 h-8 " />
        <img src={img4footer} alt="Image 4" className="w-1/5 h-4" />
        <img src={img3footer} alt="Image 3" className="w-1/5 h-6" />
        
        </div>
  
  );
};

export default Footer;
