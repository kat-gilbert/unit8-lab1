import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { AdDesigner } from './components/AdDesigner';
import { Votes } from './components/Votes';
import { Ad } from './components/Ad';

function App() {
  return (
    <div>

      <Header /> 
      
      <div className="adSamples">
      <Ad flavor={"Chocolate"} fontSize={22} darkTheme={true} />
      <Ad flavor={"Vanilla"} fontSize={40} darkTheme={false} />
      <Ad flavor={"strawberry"} fontSize={55} darkTheme={true} />
      </div>

      <div className="container">   
      <div className="adDesigner">
      <AdDesigner />
      </div>

      <div className="votes">
      <Votes />
      </div>
    </div>

    </div>
  );
}

export default App;
