import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Nav from './components/Nav'
import Home from './components/Home/Home'
import Deals from './components/Deals/Deals'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
