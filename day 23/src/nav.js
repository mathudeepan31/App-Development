
import user from './Stylee/user.png';
import './Stylee/navstyle.css'
import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { LogoutBtn } from './Buttons';
function Nav() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user} id="menubar" alt="menubar"></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            
          <h3 id="userspan">RIYA<br/><span>727821TUAD0XX@skct.edu.in</span></h3>
          
          <ul>
            <Link to="/oprequest"><DropdownItem  text = {"OUT-PASS REQUEST"}/></Link>
            <Link to="/odrequest"><DropdownItem  text = {"ON-DUTY REQUEST"}/></Link>
            <Link to="/allrequests"><DropdownItem  text = {"ALL REQUESTS DONE"}/></Link>
            <LogoutBtn/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <p id="li"> {props.text} </p>
    </li>
  );
}

export default Nav;
