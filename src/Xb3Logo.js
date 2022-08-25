import React from 'react'
import './Xb3Logo.css'
import xb3 from './image/Xenoblade3-logo.webp'
import xb3WallPaper from './image/xb3wallpaper.png'
import { useState } from 'react'

function Xb3Logo() {
  const [togglehidden,setToggle] = useState('hideXb3WallBox');
  const [fadeIn,setFadeIn] = useState('xb3WallPaper');
  const [xb3LogoFadeIn,setXb3LogoFadeIn] = useState('xb3LogoNotFadeIn');
  const [xb3LinkFadeIn,setXb3LinkFadeIn] = useState('xb3LinkBeforeFade');
  const showXb3WallBox = ()=>{
    setToggle('xb3WallBoxActive');
  }
  const closeXb3WallBox = ()=>{
    setToggle('hideXb3WallBox');
    setFadeIn('xb3WallPaper');
    setXb3LogoFadeIn('xb3LogoNotFadeIn');
    setXb3LinkFadeIn('xb3LinkBeforeFade')
  }
  const TriggerfadeInAnimation = ()=>{
    setFadeIn('xb3WallPaperFadeIn');
  }
  const xb3LogoFadeInAnimation = ()=>{
    setXb3LogoFadeIn('xb3LogoFadeIn')
  }
  const Xb3LinkFadeInAnimation = ()=>{
    setXb3LinkFadeIn('xb3Link')
  }
  return (
    <>
      <div className='xb3LogoBox' onClick={()=>{showXb3WallBox();
                                                TriggerfadeInAnimation();
                                                xb3LogoFadeInAnimation();
                                                Xb3LinkFadeInAnimation();}}>
          <img className='xb3Logo' src={xb3} alt='xb3'/>
          <img className='xb3LogoHover' src={xb3} alt='xb3'/>
      </div>
      <div className={togglehidden}>
        <span className='closeBtn' onClick={closeXb3WallBox}><label>CLOSE</label></span>
        <img className={fadeIn} src={xb3WallPaper} alt='xb3WallPaper'/>
        <img className={xb3LogoFadeIn} src={xb3} alt='xb3'/>
        <a href='https://www.nintendo.co.jp/switch/az3ha/index.html' target='blank'>
          <div className={xb3LinkFadeIn}>HomePage&ensp;<span>&gt;&gt;</span></div>
        </a>
      </div>
    </>
  )
}

export default Xb3Logo