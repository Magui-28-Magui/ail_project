import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div id="container" className="App container-fluid">
     <div id="body">
     <Navbar />
      <Home />
     </div>
    </div>
  );
}

export default App;
