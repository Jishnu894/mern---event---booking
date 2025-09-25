import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";


const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
      <Link to="/events" style={{ marginRight: "15px", color: "#fff" }}>Events</Link>
      {user ? (
        <>
          <Link to="/profile" style={{ marginRight: "15px", color: "#fff" }}>Profile</Link>
          <button onClick={logout} style={{ color: "#fff", background: "transparent", border: "none", cursor: "pointer" }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ color: "#fff" }}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
