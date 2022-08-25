import {React,useState} from 'react'
import './Xb1Logo.css'
import xb1 from './image/XenobladeDE-logo.png'
import xb1WallPaper from './image/xbdewallpaper.jfif'

function Xb1Logo() {
  const [togglehidden,setToggle] = useState('hideXb1WallBox');
  const [fadeIn,setFadeIn] = useState('xb1WallPaper');
  const [xb1LogoFadeIn,setXb1LogoFadeIn] = useState('xb1LogoNotFadeIn');
  const [xb1LinkFadeIn,setXb1LinkFadeIn] = useState('xb1LinkBeforeFade');

  const showXb1WallBox = ()=>{
      setToggle('xb1WallBoxActive');
    }
  const TriggerfadeInAnimation = ()=>{
      setFadeIn('xb1WallPaperFadeIn');
  }
  const closeXb1WallBox = ()=>{
    setToggle('hideXb1WallBox');
    setFadeIn('xb1WallPaper');
    setXb1LogoFadeIn('xb1LogoNotFadeIn');
    setXb1LinkFadeIn('xb1LinkBeforeFade')
  }
  const xb1LogoFadeInAnimation = ()=>{
      setXb1LogoFadeIn('xb1LogoFadeIn')
  }
  const Xb1LinkFadeInAnimation = ()=>{
    setXb1LinkFadeIn('xb1Link')
  }
  return (
    <>
        <div className='xb1LogoBox' onClick={()=>{showXb1WallBox();
                                                  TriggerfadeInAnimation();
                                                  xb1LogoFadeInAnimation();
                                                  Xb1LinkFadeInAnimation()}}>
            <img className='xb1Logo' src={xb1} alt='xb1'/>
            <img className='xb1LogoHover' src={xb1} alt='xb1'/>
        </div>
        <div className={togglehidden}>
            <span className='closeBtn' onClick={closeXb1WallBox}><label>CLOSE</label></span>
            <img className={fadeIn} src={xb1WallPaper} alt='xb2WallPaper'/>
            <img className={xb1LogoFadeIn} src={xb1} alt='xb2'/>
            <a href='https://www.nintendo.co.jp/switch/aubqa/index.html' target='blank'>
                <span className={xb1LinkFadeIn}>HomePage</span>
            </a>
        </div>
    </>
  )
}

export default Xb1Logo