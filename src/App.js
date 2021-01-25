
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Temperature from './pages/Temperature';
import CustomizeImage from './pages/CustomizeImage';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/temperature">Temperature</NavLink>
        <NavLink to="/customize-image">Customize image</NavLink>
      </nav>
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/temperature" component={Temperature} />
        <Route path="/customize-image" component={CustomizeImage} />
      </Switch>
    </div>
  );
}

export default App;
