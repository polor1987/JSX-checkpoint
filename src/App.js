import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from './img/one.jpg';
import Vid from './video/vid.mp4'

function App() {
    return (
        <div>
            <div style={{border:'solid 1px black',maxWidth :'100vw'}}>  
                <h1 className="title red">Mohamed</h1><br/>
                <img src={One}/> <br/>
                <img src="/img/one.jpg"/>  
            </div>
            <video src={Vid} style={{width:320, height:240}} type="video/mp4" controls/>  
        </div>
    );
}

export default App;