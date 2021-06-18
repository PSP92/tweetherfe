import './App.css';
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>TweetHER</h1>
      <Route path ="/login"/>
      <Route path="/home"/>
      <Route path="/search"/>
      <Route path="/notifications"/>
      <Route path="/directmessage"/>
      <Route path="/profile"/>

        
    </div>
  );
}

export default App;
