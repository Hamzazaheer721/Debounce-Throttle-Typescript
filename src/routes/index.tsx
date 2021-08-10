import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './Welcome';

const RouterCommponent = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  </div>
)
export default Route;
