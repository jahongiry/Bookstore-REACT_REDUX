import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
