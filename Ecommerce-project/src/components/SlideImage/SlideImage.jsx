import React, { useState } from 'react'
import styles from './styles.module.scss';
function SlideImage({data}) {
  const{slide,zoomContainer}=styles;
  const [backgroundPos,setBackgroundPos]=useState("center");
  const handleMouseMove=(e)=>{
    const{left,top,width,height}=e.target.getBoundingClientRect();
    const x=((e.pageX-left)/width)*100;
    const y=((e.pageY-top)/height)*100;
    setBackgroundPos(`${x}% ${y}%`);
  }
  return (
    <div className={slide}>
      {data.filter((_i,i) =>i !==3).map((src,index)=>(
        <div
          key={index}
          className={zoomContainer}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: backgroundPos
          }}
          onMouseMove={handleMouseMove}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  )
}

export default SlideImage