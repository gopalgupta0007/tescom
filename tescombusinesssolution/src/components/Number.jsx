import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Number = ({n}) => {
  const [CountOn, setCountOn] = useState(false);
  
  return (
    <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
      {CountOn&&<CountUp start={0} end={n} duration={1} delay={0}/>}+
    </ScrollTrigger>
  )

}

export default Number;