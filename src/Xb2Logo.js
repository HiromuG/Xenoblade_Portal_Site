import {React,useState} from 'react'
import './Xb2Logo.css'
import xb2 from './image/Xenoblade2-logo.webp'
import xb2WallPaper from './image/xb2wallpaper.jfif'

function Xb1Logo() {
    const [togglehidden,setToggle] = useState('hideXb2WallBox');
    const [fadeIn,setFadeIn] = useState('xb2WallPaper');
    const [xb2LogoFadeIn,setXb2LogoFadeIn] = useState('xb2LogoNotFadeIn');
    const [xb2LinkFadeIn,setXb2LinkFadeIn] = useState('xb2LinkBeforeFade');

    const showXb2WallBox = ()=>{
        setToggle('xb2WallBoxActive');
      }
    const TriggerfadeInAnimation = ()=>{
        setFadeIn('xb2WallPaperFadeIn');
    }
    const closeXb2WallBox = ()=>{
      setToggle('hideXb2WallBox');
      setFadeIn('xb2WallPaper');
      setXb2LogoFadeIn('xb2LogoNotFadeIn');
      setXb2LinkFadeIn('xb2LinkBeforeFade')
    }
    const xb2LogoFadeInAnimation = ()=>{
        setXb2LogoFadeIn('xb2LogoFadeIn')
    }
    const Xb2LinkFadeInAnimation = ()=>{
      setXb2LinkFadeIn('xb2Link')
    }
    return (
    <>
        <div className='xb2LogoBox' onClick={()=>{showXb2WallBox();
                                                  TriggerfadeInAnimation();
                                                  xb2LogoFadeInAnimation();
                                                  Xb2LinkFadeInAnimation()}}>
            <img className='xb2Logo' src={xb2} alt='xb1'/>
            <img className='xb2LogoHover' src={xb2} alt='xb1'/>
        </div>
        <div className={togglehidden}>
            <span className='closeBtn' onClick={closeXb2WallBox}><label>CLOSE</label></span>
            <img className={fadeIn} src={xb2WallPaper} alt='xb2WallPaper'/>
            <img className={xb2LogoFadeIn} src={xb2} alt='xb2'/>
            <a href='https://www.nintendo.co.jp/switch/adena/index.html' target='blank'>
                <i className={xb2LinkFadeIn}>HomePage&ensp;<span>&gt;&gt;</span></i>
            </a>
        </div>
    </>
    )
}

export default Xb1Logo