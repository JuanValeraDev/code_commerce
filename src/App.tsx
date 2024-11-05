import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from "./pages/ProductsPage.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
      <Router>
          <Route path="/" Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route Component={NotFoundPage} />
  <Footer/>
      </Router>
  );
}

export default App;
