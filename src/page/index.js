import Header from "../components/header/Header";
import Body from "../components/body";
import Footer from "../components/footer";
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
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
