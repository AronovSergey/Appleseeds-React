import React, { useRef } from 'react';

const PlayAndPause = () => {
    const videoRef = useRef();



    return (
        <div>
            <video ref={videoRef} width="750" height="450" controls >
                <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4"/>
            </video>
            <div>
                <button onClick={() => videoRef.current.play()}>play</button>
                <button onClick={() => videoRef.current.pause()}>pause</button>
            </div>
        </div>
    )
}

export default PlayAndPause;
