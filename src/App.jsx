// import {Routes, Route, Link,Navigate} from 'react-router'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Login from './Login'
// import NavBar from './NavBar'
// import PageNotFound from './PageNotFound'
// import College from './College'
// import Student from './Student'
// import Department from './Department'
// import Branch from './Branchdetails'





// // import { Routes, Route, Link, Navigate } from 'react-router'
// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // import Home from './Home'
// // import About from './About'
// // import Contact from './contact'
// // import LOGIN from './Login'
// // import NavBar from './NavBar'
// // import PageNotFound from './PageNotFound'
// // import College from './College'
// // import Student from './Student'
// // import Department from './Department'
// // import Branch from './Branchdetails'


// // function App() {



// //   return (
// //     <>
// //       <NavBar />

// //       <Routes>
// //         <Route path="/" element={<Home />}></Route>
// //         <Route path="/About" element={<About />}></Route>
// //         <Route path="/Contact" element={<Contact />}></Route>
// //         <Route path="/Login" element={<Login />}></Route>
// //         <Route path="/College" element={<College  Page/>}>
// //         <Route path="/Student" element={<Student/> }></Route>
// //         <Route path="/Department" element={<Department />}></Route>
// //         <Route path="/Branch" element={<Branch />}></Route>
// //         </Route>


// //         {/* <Route path="/*" element={<Navigate to={'/login'}/>}></Route> */}
// //       </Routes>
// //     </>
// //   )
// // }

// // export default App



// function App() {


//   return (
//     <>

//       <NavBar />

//       <Routes>

//         <Route path="/" element={<Home />}></Route>
//         <Route path="/About" element={<About />}></Route>
//         <Route path="/Contact" element={<Contact />}></Route>
//         <Route path="/Login" element={<LOGIN />}></Route>

//         <Route path="/college" element={<College />}>

//           <Route path='student' element={<Student />}></Route>
//           <Route path='department' element={<Department />}></Route><Route path='branch' element={<Branch />}></Route>
//         </Route>
//         {/* <Route path="/*" element={<Navigate to={'/login'}/>}></Route>  */}

//       </Routes>

//     </>
//   )
// }

// export default App













import { Routes, Route, Link, Navigate } from 'react-router'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Home'
import About from './About'
import Contact from './contact'
import LOGIN from './Login'
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './student'
import Department from './Department'
import Branch from './Branchdetails'

function App() {


  return (
    <>

      {/* <NavBar /> */}

      <Routes>

        <Route element={<NavBar />}>

          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>


          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<LOGIN />}></Route>
          <Route path="/User" element={<User />}></Route>


        </Route>

        <Route path="/college" element={<College />}>

          <Route index element={<Student />}></Route>
          <Route path='department' element={<Department />}></Route><Route path='branch' element={<Branch />}></Route>
        </Route>
        {/* <Route path="/*" element={<Navigate to={'/login'}/>}></Route>  */}

      </Routes>

    </>
  )
}

export default App


