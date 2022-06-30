import logo from './logo.svg';
import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";


function App() {




  return (
    <div className="App">
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <audio src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
    </div>
  );
}

export default App;
