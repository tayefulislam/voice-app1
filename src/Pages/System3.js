import React, { useState } from 'react';
import { ReactMic } from 'react-mic';


const System3 = () => {




    const [record, setRecord] = useState(false)

    const startRecording = () => {
        setRecord(true)
    }

    const stopRecording = () => {
        setRecord(false)
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }





    return (
        <div>

            <ReactMic
                record={record}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                strokeColor="#000000"
                backgroundColor="#FF4081" />

            <button onClick={() => startRecording} type="button">Start</button>
            <button onClick={() => stopRecording} type="button">Stop</button>


        </div>
    );
};

export default System3;