import "./navbar-mobile.css";
import "./navbar-desktop.css";
import "./header.css";
import logo from "../assets/logo.png";

function NavBarMobile({
  navbarItems = [],
  register = "",
  onRegister = () => {},
}) {
  return (
    <div className="navbar-mobile">
      <div className="navbar-menu">
        <input id="toggle" type="checkbox" />

        <label className="toggle-container" for="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="nav">
          {navbarItems.map((e) => {
            return (
              <a className="nav-item" href="/">
                {e.title}
              </a>
            );
          })}
        </nav>
      </div>
      {/* <button
        className="register"
        onClick={onRegister}
        style={{ backgroundColor: "#9E1C1E" }}
      >
        {register}
      </button> */}
    </div>
  );
}

function NavbarDesktop({
  navbarItems = [],
  register = "",
  onRegister = () => {},
}) {
  return (
    <div className="navbar-desktop">
      <img alt="logo" src={logo} />
      <div className="titles">
        {navbarItems.map((e) => {
          return <a href="/">{e.title}</a>;
        })}
      </div>

      <button
        className="register"
        onClick={onRegister}
        style={{ backgroundColor: "#9E1C1E" }}
      >
        {register}
      </button>
    </div>
  );
}

function Header() {
  const navbarItems = [
    { title: "Trang chủ" },
    { title: "Chính sách" },
    { title: "Bảng giá" },
    { title: "Bài viết" },
    { title: "Liên hệ" },
  ];

  const register = "Đăng ký cho dòng họ";

  const props = {
    navbarItems,
    register,
    onRegister: () => {},
  };

  return (
    <header>
      <NavbarDesktop {...props} />
      <NavBarMobile {...props} />
    </header>
  );
}

export default Header;
