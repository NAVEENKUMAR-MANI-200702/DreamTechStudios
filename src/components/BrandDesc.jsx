import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/components/brandDesc.css';

const BrandDesc = () => {
  const [text] = useTypewriter({
    words: ["Success starts with dream_"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div className='BrandDecContainer' id="about-us">
      <div className='container'>
        <h1>Dream Tech Studio</h1>
        <h1>
          <span className='animatedText'>
            {text || ''} {/* Ensure fallback if text is undefined */}
          </span>
          <Cursor />
        </h1>
        <p>
        Dream Tech Studio is an innovative IT startup that was established in 2019,<br/> focusing on delivering cutting-edge technology solutions to clients across various sectors. Here’s an overview of our company:
        </p>
      </div>
    </div>
  );
};

export default BrandDesc;
