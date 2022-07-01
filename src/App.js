import logo from './logo.svg';
import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";
import { Routes, Route, Link } from "react-router-dom";

import System1 from './Pages/System1';
import System5 from './Pages/System5';


// import System2 from './Pages/System2';
// import System3 from './Pages/System3';

// import System4 from './Pages/System4';


function App() {




  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<System1></System1>}></Route>
        <Route path='/5' element={<System5></System5>}></Route>


        {/* <Route path='/2' element={<System2></System2>}></Route>
        <Route path='/3' element={<System3></System3>}></Route>
        <Route path='/4' element={<System4></System4>}></Route> */}

      </Routes>



    </div>
  );
}

export default App;
