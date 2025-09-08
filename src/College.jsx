// import {Link,NavLink,Outlet } from "react-router"


// function College(){
//     return (
//         <div className="college" style={{texAlign:'center'}}>
        
//         <h2>College Page</h2>

// <NavLink className="Link" to ="Student">Student</NavLink>
// <NavLink className="Link" to="Department">Department</NavLink>
// <NavLink className="Link" to="Branch">Branch</NavLink>

// <Outlet/>


//         </div>
        
//     )
// }


// export default College


import {Link, NavLink, Outlet,useNavigate} from 'react-router'
// import "./header.css"
function College() {
  
const navigate=useNavigate();
function handle()
{
  navigate("/");
}

  return (
   <div className="college" style={{textAlign:'center'}}>

    <h2>College Page</h2>

    <NavLink className="link" to="">Student</NavLink>
    <NavLink className="link" to="department">Department</NavLink>
    <NavLink className="link" to="branch">Branch</NavLink>
    <Outlet /> 

    <br/><br/>
    <button onClick={handle}>Go Back</button>
   
      
    </div>
  )
}

export default College
