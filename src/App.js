import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import classes from './app.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
