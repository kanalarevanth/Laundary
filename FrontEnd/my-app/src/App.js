import './App.css';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import signup from './components/signup/signup';
import ExistingOrders from './components/existingorders/existingorder';
import Orderpage from "./components/screens/orderPage";
import Creatingorder from "./components/screens/createOrder";
import login from './components/login/login'
import PrivateRoute from './components/utils/privaterouter'

function App() {
  return( 
    <BrowserRouter> 
    <div className="App" >
        <Switch> 
        <Route exact path="/signup" component={signup} />
        <Route exact path="/" component={login} />
        <PrivateRoute exact path="/creatingorder" component={Creatingorder} /> 
        <PrivateRoute exact path="/orderPage" component={Orderpage} /> 
        <PrivateRoute exact path="/order" component={ExistingOrders} />
        </Switch> 
      </div>
      </BrowserRouter> 
)
}

export default App;
