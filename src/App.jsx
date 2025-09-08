
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import LOGIN from './Login';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import College from './College';
import Student from './Student';
import Department from './Department';
import Branchdetails from './Branchdetails';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<LOGIN />} />

        {/* Nested Routes under /college */}
        <Route path="/College" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="branch" element={<Branchdetails />} />
        </Route>

        {/* Optional: Add a fallback route */}
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </>
  );
}

export default App;
