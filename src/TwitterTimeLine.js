import React,{useEffect} from 'react'
import { Timeline } from 'react-twitter-widgets';
import './TwitterTimeLine.css'

function TwitterTimeLine() {
    useEffect(()=>{
      if(window.twttr){
        window.twttr.widgets.load()
      }
    },[])
  return (
    <div className='thetwittertimeline'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'XenobladeJP'
          }}
          options={{
            id: 'profile:XenobladeJP',
            tweetLimit: '1',
            theme:'dark'
          }}
        />
      </div>
  )
}

export default TwitterTimeLine