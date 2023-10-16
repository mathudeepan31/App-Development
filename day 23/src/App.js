import {
BrowserRouter,
Route,
Routes,
} from "react-router-dom";
import Signin from "./Signin";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './REDUX/reducers';
import Header from './COMPONENTS/header';
import Footer from './COMPONENTS/footer';
import Tabs from './COMPONENTS/tabs';
import Home from './PAGES/Homepage';
import Signup from "./Signup";
import Services from "./PAGES/Services";
import Landingpage from "./landingpage";
function App(){
  const store = createStore(rootReducer);
return(
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/service' element={<Services/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ome' element={<Landingpage/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>
)
}
export default App;
