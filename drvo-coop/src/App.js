import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import MainComponent from './components/mainComponent/mainComponent.js';
import AboutComponent from './components/aboutComponent/aboutComponent.js';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <p>App works!</p>
      </div>
    

    <Route exact path="/about/" component={AboutComponent}/>
    <Route exact path="/" component = {MainComponent}/>
    </BrowserRouter>
    
  );
}

export default App;
