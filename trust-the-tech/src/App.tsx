import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
