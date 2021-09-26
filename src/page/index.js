import "./index.css";

function App() {
  return (
    <div class="container">
      <input id="toggle" type="checkbox" />

      <label class="toggle-container" for="toggle">
        <span class="button button-toggle"></span>
      </label>

      <nav class="nav">
        <a class="nav-item" href="">
          Dashboard
        </a>
        <a class="nav-item" href="">
          History
        </a>
        <a class="nav-item" href="">
          Statistics
        </a>
        <a class="nav-item" href="">
          Settings
        </a>
      </nav>

      {/* <section class="dummy-content">
        <div class="circle"></div>
        <div class="text">
          <span></span>
          <span></span>
        </div>
        <div class="square-top"></div>
        <div class="square-behind"></div>
      </section> */}
    </div>
  );
}

export default App;
