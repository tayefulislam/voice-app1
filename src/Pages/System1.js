import React from 'react';
import { ReactMediaRecorder } from "react-media-recorder";


const System1 = () => {


    const handleSubmit = (event) => {

        event.preventDefault()

        const a = event.target.a.value;

        console.log(a)

    }

    return (
        <div className="App">

            <ReactMediaRecorder
                audio
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <form onSubmit={handleSubmit}>
                        <p>{status}</p>
                        <button onClick={startRecording}>Start Recording</button>
                        <button onClick={stopRecording}>Stop Recording</button>
                        <audio name='a' src={mediaBlobUrl} controls autoPlay loop />

                        <input type="submit" value='Submit' />
                    </form>
                )}
            />

        </div>
    );
};

export default System1;