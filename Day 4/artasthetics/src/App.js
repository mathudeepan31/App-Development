import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  import Signin from "./Signin";
  import Signup from "./Signup";
  function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signin/>}></Route>
            <Route path='/newuser' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
  export default App;