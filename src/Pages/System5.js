import React from 'react';
import { useReactMediaRecorder } from "react-media-recorder";

const System5 = () => {

    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ audio: true });




    const handleAudio = () => {

        console.log(mediaBlobUrl)

    }





    return (
        <div >

            <div>
                <p>{status}</p>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
                <audio src={mediaBlobUrl} controls autoPlay loop />


            </div>


            <button onClick={() => handleAudio()}>Send to Server</button>


        </div>
    );
};

export default System5;