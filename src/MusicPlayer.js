import {React,useState,useRef} from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  const musicTracks = [
    {
      name: "ゼノブレイド Title Theme",
      src: require('./audio/1.mp3')
    },
    {
      name: "ゼノブレイド2 Title Theme",
      src: require('./audio/2.mp3')
    },
    {
      name: "ゼノブレイド3 Main Theme",
      src: require('./audio/3.mp3')
    }]
  const audio = useRef('audio');
  const [musicList,setMusicList] = useState('musicListClose');
  const [mp3,setMp3] = useState('mp3BeforeShow');
  const [musicOn,setMusicOn] = useState('musicOnOff');
  const [musicOff,setMusicOff] = useState('musicOnOff Active');
  const [trackIndex,setTrackIndex] = useState(0);
  const handleClickPrev = ()=>{
    setTrackIndex((current)=>
      current === 0 ? musicTracks.length-1 : current-1
    )
    stopMusic();
    playMusic();
  }
  const handleClickNext = () => {
    setTrackIndex((current) =>
      current < musicTracks.length-1 ? current+1 : 0
    )
    stopMusic();
    playMusic();
  }
  const showMusicList = ()=>{
    setMusicList('musicList');
    setMp3('mp3');
    playMusic();
  }
  const closeMusicList = ()=>{
    setMusicList('musicListClose');
    setMp3('mp3BeforeShow');
    stopMusic();
  }
  const playMusic = ()=>{
    audio.current.load(); 
    audio.current.volume = 0.9;
    audio.current.play();
    setActive();
    console.log(audio.current);
  }
  const stopMusic = ()=>{
    audio.current.pause();
    audio.current.currentTime = 0;
    setInActive();
  }
  const setActive = ()=>{
    setMusicOn('musicOnOff Active');
    setMusicOff('musicOnOff');
  }
  const setInActive = ()=>{
    setMusicOff('musicOnOff Active');
    setMusicOn('musicOnOff');
  }
  return (
    <div className='musicPlayer'>
        <audio /*controls*/ ref={audio} loop> 
          <source src={musicTracks[trackIndex].src} />
        </audio>
        <div className={mp3}>
          <span className='bgmText'>BGM </span>
          <span className={musicOn} onClick={showMusicList}>ON</span>
          <span className='line'>|</span>
          <span className={musicOff} onClick={closeMusicList}>OFF</span>
          <div className={musicList}>
            <span className='musicPrev' onClick={handleClickPrev}>&lt;&lt;</span>
            <span className='musicIndex'>{trackIndex+1}：</span>
            <span className='musicName'>{musicTracks[trackIndex].name}</span>
            <span className='musicNext' onClick={handleClickNext}>&gt;&gt;</span>
          </div>
        </div>
    </div>
  )
}

export default MusicPlayer