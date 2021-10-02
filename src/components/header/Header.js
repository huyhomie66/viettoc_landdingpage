import "./navbar-mobile.css";
import "./navbar-desktop.css";
import "./header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

function NavBarMobile({
  currentBlock,
  navbarItems = [],
  register = "",
  onRegister = () => { },
}) {
  return (
    <div className="navbar-mobile">
      <div className="navbar-menu">
        <input id="toggle" type="checkbox" />
        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="nav">
          {navbarItems.map((e, i) => {
            return (
              <a key={i} className="nav-item" href="/">
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
  currentBlock,
  setCurrentBlock,
  navbarItems = [],
  register = "",
  onRegister = () => { },
}) {
  return (
    <div className="navbar-desktop">

      <img alt="logo" src={logo} />
      <div className="titles">

        {navbarItems.map((e, i) => {
          const isFocus = currentBlock === i
          return (
            <button key={i} className={isFocus ? 'focus' : 'un-focus'} onClick={() => {
              console.log('dkm')
              setCurrentBlock(i)
            }}>
              {e.title}
            </button>
          );
        })}
      </div>

      <button
        className="register"
        onClick={onRegister}
        style={{ backgroundColor: "#9E1C1E" }}
      >
        {register}
      </button>
    </div >
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

  const [currentBlock, setCurrentBlock] = useState(0)

  const register = "Đăng ký cho dòng họ";

  const props = {
    currentBlock,
    setCurrentBlock,
    navbarItems,
    register,
    onRegister: () => { },
  };

  return (
    <header>
      <NavbarDesktop {...props} />
      <NavBarMobile {...props} />
    </header>
  );
}

export default Header;
