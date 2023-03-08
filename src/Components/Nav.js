import { NavLink, Link} from "react-router-dom";

export default function Nav(){
    return ( <nav>
          <NavLink to="/html" activeclassname="active"> <button>HTML</button></NavLink> 
          <NavLink to="/css" activeclassname="active"> <button>CSS</button></NavLink> 
          <NavLink to="/javascript" activeclassname="active"> <button>JavaScript</button></NavLink> 
          <NavLink to="/react" activeclassname="active"> <button>React</button></NavLink> 
          <NavLink to="/headless-cms" activeclassname="active"> <button>Sanity and headless cms</button></NavLink> 
       </nav>
       )
   }