import { NavLink, Link} from "react-router-dom";

export default function Nav(){
    return ( <nav>
          <NavLink className={"linker"} to="/html" activeclassname="active"> <button>HTML</button></NavLink> 
          <NavLink className={"linker"} to="/css" activeclassname="active"> <button>CSS</button></NavLink> 
          <NavLink className={"linker"} to="/javascript" activeclassname="active"> <button>JavaScript</button></NavLink> 
          <NavLink className={"linker"} to="/react" activeclassname="active"> <button>React</button></NavLink> 
          <NavLink className={"linker"} to="/headless-cms" activeclassname="active"> <button>Sanity and headless cms</button></NavLink> 
       </nav>
       )
   }