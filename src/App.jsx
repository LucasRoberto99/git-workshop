import Header from "./components/Header";
import TestComp from "./components/TestComp";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <TestComp />
      <p>
        Lorem ipsum dolor sit, dsq dsq qsdsq dqsdq qsd amet consectetur
        adipisicing elit. Tempore necessitatibus sunt suscipit nobis beatae
        reprehenderit ex officiis aliquid laboriosam deleniti aut amet dolores
        reiciendis quisquam repellendus, quos explicabo! Possimus, voluptatibus.
        Toto est un graàons !
      </p>
      <button
        onClick={() => {
          alert("hey i'm clicked");
        }}
      >
        Test
      </button>
      <Footer />
    </div>
  );
}

export default App;
