import { HashRouter, Route, Switch } from 'react-router-dom'
import Basket   from './components/Basket'
import Showcase from './components/Showcase'
import Welcome  from './components/Welcome'
import './App.css'

function App(props) {

  return (
      <div className="container">
          <HashRouter>
            <Switch>
              <Route path="/showcase">
                <Showcase />
              </Route>
              <Route path="/basket">
                <Basket />
              </Route>
              <Route>
                <Welcome />
              </Route>
            </Switch>
          </HashRouter>
      </div>
  );
}

export default App;
