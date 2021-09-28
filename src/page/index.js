import Header from "../components/Header";
import Body from "../components/body";
// import {
//   getProvider,
//   getIntro,
//   getIntroCount,
//   getSlide,
//   getTestimonial,
//   register,
//   changePassword,
//   active,
//   sendMessage,
// } from "../service/api";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   getProvider();
  //   getIntro();
  //   getIntroCount();
  //   getSlide();
  //   getTestimonial();
  //   register();
  //   changePassword();
  //   active();
  //   sendMessage();
  // }, []);

  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
