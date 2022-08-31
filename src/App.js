import './App.css';
import Xb1Logo from './Xb1Logo';
import Xb2Logo from './Xb2Logo';
import Xb3Logo from './Xb3Logo';
import MusicPlayer from './MusicPlayer';
import {Link} from 'react-router-dom'
import VideoCarousel from './VideoCarousel';

function App() {
    return (
    <div className="App">
      <Link to='/' style={{textDecoration:'none'}}><h1 className='title'>Xenoblade Portal Site</h1></Link>
      <h2 className='subTitle'>Nintendo Switchで遊べる「<span>Xenoblade</span>」シリーズ</h2>
      <MusicPlayer />
      <div className='logoImgBox'>
        <Xb3Logo />
        <div className='xb1and2LogoBox'>
          <Xb2Logo />
          <Xb1Logo />
        </div>
      </div>
      <p className='hr'></p>
      <VideoCarousel />
    </div>
  );
}

export default App;
