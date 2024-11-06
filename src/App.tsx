import {Routes, Route,} from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from "./pages/ProductsPage.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

function App() {
    return (<>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
