import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import {Jobs} from './views/Jobs';
import {Companies} from './views/Companies';
import {Countries} from './views/Countries';
import {Cities} from './views/Cities';
import {NavBar} from './views/NavBar';
import { NotFoundView } from './views/NotFoundView';

function App() {
    return (

      <Router>
      <NavBar></NavBar>
      <Switch>
      <Route path="/" exact component={Jobs}></Route>
      <Route path="/companies" exact component={Companies}></Route>
      <Route path="/cities" exact component={Cities}></Route>
      <Route path="/countries" exact component={Countries}></Route>
      <Route component={NotFoundView}></Route>
      </Switch>
      </Router>
    
     );
}
export default App;
