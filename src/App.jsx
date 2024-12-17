import Navbar from "./components/Navbar.jsx";
import "./index.css";
import example1 from "./assets/example1.jpg";
import example2 from "./assets/example2.jpg";
import example3 from "./assets/example3.jpg";

// import Home from "./components/Home.jsx";
// import "./App.css";

const App = () => {
  return (
    <div className="w-full h-screen absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-around m-1 p-1 flex-wrap">
        <div className=" m-1 p-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-lg" src={example1} alt="" />
          </a>
        </div>
        <div className="m-1 p-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-lg" src={example2} alt="" />
          </a>
        </div>
        <div className="m-1 p-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-lg" src={example3} alt="" />
          </a>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quam
            ullam, dicta pariatur facilis adipisci at repudiandae soluta earum,
            nulla facere. Tempore corporis harum, et praesentium porro
            necessitatibus. Animi, laboriosam.
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
