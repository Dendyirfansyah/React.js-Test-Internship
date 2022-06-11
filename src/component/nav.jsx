// import logo from "./logo.svg";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo">INI FORUMS</div>
      <input
        className="searchbox"
        type="text"
        placeholder="   Pencarian......"
      />
      <div className="menu">
        <ul>
          <li>
            <div className="category">Kategori
            <ul>
              <li>IT</li>
              <li>Non IT</li>
              <li>Tech</li>
            </ul></div>
            
          </li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
      {/* <div className="searchbox">
        </div> */}
    </nav>
  );
}

export default Nav;
