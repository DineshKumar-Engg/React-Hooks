import React from 'react'
import { useRef } from 'react'

const Video = () => {

    const videoRef= useRef(null)
    const src='http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4'

    function handlePlay(){
        console.log(videoRef);
        console.log("video playing");
        videoRef.current.play()
    }
    function handlePause(){
        console.log(videoRef);
        console.log("video paused");
        videoRef.current.pause()
    }
    

    const handleToggle=()=>{
        videoRef.current.paused?handlePlay():handlePause()
    }

    return (
    <div className='ref'>
        <video
        src={src}
        height={200}
        width={400}
        ref={videoRef}
        onClick={handleToggle}
        >

        </video>
        <hr style={{width:'100%',textAlign:'left',margin:'40px 0 10px 0'}}></hr>

    </div>
  )
}

export default Video