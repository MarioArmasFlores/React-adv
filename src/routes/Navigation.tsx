import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />

          <ul>
            <li>
              <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="about" element={<div>About</div>}/>
            <Route path="users" element={<div>Users</div>}/>
            <Route path="home" element={<div>Home</div>} />
            <Route path="/*" element={ <Navigate to={"/home"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
