import {React,useState} from 'react'
import './VideoCarousel.css'
import XBDECM from './video/XenobladeDE_TVCM.mp4'
import XB2CM from './video/Xenoblade2_TVCM.mp4'
import XB3CM from './video/Xenoblade3_TVCM.mp4'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';

function VideoCarousel() {
  const videos = [{
    id: 1,
    title: 'ゼノブレイドDE TVCM',
    src: XBDECM,
  },{
    id: 2,
    title: 'ゼノブレイド2 TVCM',
    src: XB2CM,
  },{
    id: 3,
    title: 'ゼノブレイド3 TVCM',
    src: XB3CM,
  }]
  const carouselVideos = document.getElementsByClassName('carouselVideos');
  const [index, setIndex] = useState(0);
  const setPausing = (selectedIndex,e)=>{
    for(let i=0;i<=carouselVideos.length;i++){
      carouselVideos[i]?.pause();
      setIndex(selectedIndex);
    }
  }
  return (
    <div className='videoCarousel'>
      <span className='videoCarouselTitle'>Trailer</span>
      <Carousel interval={null} activeIndex={index} onSelect={setPausing}>
        {videos.reverse().map((v)=>{
          return(
            <Carousel.Item key={v.id}>
              <video controls style={{width:'100%'}} className='carouselVideos'>
                <source src={v.src}/>
              </video>
              <h4 className='carouselTitle'>{v.title}</h4>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default VideoCarousel