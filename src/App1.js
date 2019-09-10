import React from 'react';
import logo from './logo.svg';
import './App1.css';

function App1() {
    return (
        <div className="App1">
            <header className="App-header1">
                <img src={logo} className="App-logo" als="logo" />
                <p>
                    Hello world!
                </p>
                <a
                  className="App-link"
                  href="https://daum.net"
                  target="_black"
                  rel="noopener noreferrer"
                >
                    Search Engine
                </a>
            </header>
        </div>
    );
}

export default App1;