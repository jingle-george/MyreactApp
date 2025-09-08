import { NavLink, Outlet } from "react-router-dom";

function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h2>College Page</h2>

      <nav style={{ marginBottom: "1rem" }}>
        <NavLink className="link" to="student" style={{ margin: '0 10px' }}>Student</NavLink>
        <NavLink className="link" to="department" style={{ margin: '0 10px' }}>Department</NavLink>
        <NavLink className="link" to="branch" style={{ margin: '0 10px' }}>Branch</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default College;
