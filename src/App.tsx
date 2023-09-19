import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar>
          <figure className="text-center">
            <blockquote className="blockquote">React Components</blockquote>
            <figcaption className="blockquote-footer">
              by eduardocarneiro.com
            </figcaption>
          </figure>
        </NavBar>
      </div>
    </>
  );
}

export default App;
