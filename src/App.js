import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <NavBar title="TextPlay" aboutText="About TextPlay" />
      <div className="container my-3">
        <TextInput heading="Enter you text here" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
