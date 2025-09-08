import {Link, Outlet} from 'react-router'
import './header.css'

export default function Navbar(){
    return(
        <div>

        <div className='header'>
            <div>
                <Link className='link' to={"/"}><h2>LOGO</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="Link" to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/About">About</Link>
                        </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                        </li>
                    <li>
                        <Link to="/Login">Login</Link>
                        </li>
                    <li>
                        <Link to="/College">College</Link>
                        </li>

                         <li>
                        <Link to="/user">User</Link>
                        </li>
                </ul>
            </div>
        </div>
        <Outlet />
        </div>
    )
}







// import { Link } from 'react-router'
// import './header.css'

// export default function NavBar() {

//     return <div className='header'>

//         <div>
//             <Link className='link' to={"/"}><h2>LOGO</h2></Link>
//         </div>
        
//         <div>
//             <ul>
//                 <li>
//                     <Link className="Link" to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/About">About</Link>
//                 </li>

//                 <li>
//                     <Link to="/Contact">Contact</Link>
//                 </li>
//                 <li>
//                     <Link to="/Login">Login</Link>
//                 </li>
//                 <li>
//                     <Link to="/college">college</Link>
//                 </li>
//             </ul>
//         </div>
//     </div>
// }