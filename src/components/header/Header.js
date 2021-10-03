import "./navbar-mobile.css";
import "./navbar-desktop.css";
import "./header.css";
import "./animation.css";
import logo from "../../assets/logo.png";
import React, { useState, useRef, useLayoutEffect } from "react";

function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false);

  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return stick;
}

function NavBarMobile({
  currentBlock,
  navbarItems = [],
  register = "",
  onRegister = () => {},
}) {
  const ref = useRef();
  const sticky = useStickyHeader(50);

  const headerClasses = `header navbar-mobile ${sticky && "sticky"}`;
  return (
    <header ref={ref} className={headerClasses}>
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
    </header>
  );
}

function NavbarDesktop({
  currentBlock,
  setCurrentBlock,
  navbarItems = [],
  register = "",
  onRegister = () => {},
}) {
  const ref = useRef();
  const sticky = useStickyHeader(50);

  const headerClasses = `header navbar-desktop ${sticky && "sticky"}`;
  return (
    <header ref={ref} className={headerClasses}>
      <img alt="logo" src={logo} />
      <div className="titles">
        {navbarItems.map((e, i) => {
          const isFocus = currentBlock === i;
          return (
            <button
              key={i}
              className={isFocus ? "focus" : "un-focus"}
              onClick={() => {
                console.log("dkm");
                setCurrentBlock(i);
              }}
            >
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
    </header>
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

  const [currentBlock, setCurrentBlock] = useState(0);

  const register = "Đăng ký cho dòng họ";

  const props = {
    currentBlock,
    setCurrentBlock,
    navbarItems,
    register,
    onRegister: () => {},
  };

  return (
    <React.Fragment>
      <NavbarDesktop {...props} />
      <NavBarMobile {...props} />
    </React.Fragment>
  );
}

export default Header;
